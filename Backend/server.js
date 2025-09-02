// backend/server.js
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const { body, validationResult } = require('express-validator');

const app = express();


// Basic middlewares
app.use(helmet());
app.use(cors({
    origin: true // in production replace with your domain e.g. 'https://example.com'
}));
app.use(express.json());
app.use(morgan('dev'));

// Rate limiter
app.use(rateLimit({ windowMs: 60 * 1000, max: 30 }));

// Ensure upload dir exists
const uploadDir = path.join('/tmp', 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

// Multer config for optional file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => {
        const safe = Date.now() + '-' + file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, '_');
        cb(null, safe);
    }
});
const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
    fileFilter: (req, file, cb) => {
        const allowed = /\.(pdf|docx?|png|jpe?g|gif|mp4|mov)$/i;
        if (allowed.test(file.originalname)) cb(null, true);
        else cb(new Error('File type not allowed'));
    }
});

// Transporter factory: supports SendGrid SMTP or generic SMTP (Gmail)
function createTransporter() {
    if (process.env.SENDGRID_API_KEY) {
        // SendGrid SMTP via nodemailer
        return nodemailer.createTransport({
            host: 'smtp.sendgrid.net',
            port: 587,
            auth: { user: 'apikey', pass: process.env.SENDGRID_API_KEY }
        });
    }

    if (!process.env.SMTP_HOST) {
        throw new Error('SMTP_HOST or SENDGRID_API_KEY not configured in .env');
    }

    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587', 10),
        secure: (process.env.SMTP_SECURE === 'true'),
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
}

// Validators for required fields
const validators = [
    body('product').trim().notEmpty().withMessage('Product is required'),
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required')
];

// Endpoint: receive form (optional file field name = 'file')
app.post('/send-email', upload.single('file'), validators, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // cleanup uploaded file if validation fails
        if (req.file) try { fs.unlinkSync(req.file.path); } catch (e) { }
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        product, quantity, unit, priceMin, priceMax,
        city, state, description, name, company, email, phone
    } = req.body;

    // Escape helper
    const escapeHtml = (text = '') => String(text)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    const html = `
    <h2>New Buyer Requirement</h2>
    <p><strong>Product:</strong> ${escapeHtml(product)}</p>
    <p><strong>Quantity:</strong> ${escapeHtml(quantity || '')} ${escapeHtml(unit || '')}</p>
    <p><strong>Price Range:</strong> ${escapeHtml(priceMin || '')} - ${escapeHtml(priceMax || '')}</p>
    <p><strong>Location:</strong> ${escapeHtml(city || '')} ${escapeHtml(state || '')}</p>
    <p><strong>Details:</strong><br/> ${escapeHtml(description || '')}</p>
    <hr/>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company || '')}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
  `;

    try {
        const transporter = createTransporter();

        const mailOptions = {
            from: process.env.EMAIL_FROM || process.env.SMTP_USER,
            to: process.env.EMAIL_TO,
            subject: `New Buyer Form: ${product}`,
            html,
            replyTo: email || undefined,
            attachments: []
        };

        if (req.file) {
            mailOptions.attachments.push({
                filename: req.file.originalname,
                path: req.file.path
            });
        }

        const info = await transporter.sendMail(mailOptions);

        // cleanup uploaded file after send
        if (req.file && fs.existsSync(req.file.path)) {
            try { fs.unlinkSync(req.file.path); } catch (e) { console.warn('cleanup failed', e); }
        }

        return res.status(200).json({ message: 'Email sent', info });
    } catch (err) {
        console.error('Email error:', err);
        if (req.file && fs.existsSync(req.file.path)) try { fs.unlinkSync(req.file.path); } catch (e) { }
        return res.status(500).json({ message: 'Failed to send email', error: err.message || err });
    }
});

// health
app.get('/', (req, res) => res.send('Backend OK'));

module.exports = (req, res) => {
    app(req, res);
};

