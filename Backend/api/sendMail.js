
const nodemailer = require("nodemailer");

function buildHtml(fields) {
    const {
        product, quantity, unit, priceMin, priceMax, city, state,
        description, name, company, email, phone
    } = fields;

    return `
    <h2>New Buyer Requirement (RFQ)</h2>
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;">
      <tr><td><strong>Product</strong></td><td>${product || ""}</td></tr>
      <tr><td><strong>Quantity</strong></td><td>${quantity || ""} ${unit || ""}</td></tr>
      <tr><td><strong>Price Range</strong></td><td>${priceMin || ""} - ${priceMax || ""}</td></tr>
      <tr><td><strong>Location</strong></td><td>${city || ""}${city && state ? ", " : ""}${state || ""}</td></tr>
      <tr><td><strong>Name / Company</strong></td><td>${name || ""} / ${company || ""}</td></tr>
      <tr><td><strong>Email / Phone</strong></td><td>${email || ""} / ${phone || ""}</td></tr>
      <tr><td valign="top"><strong>Details</strong></td><td>${(description || "").replace(/\n/g, "<br/>")}</td></tr>
    </table>
  `;
}

async function sendMail(formData, file) {
    
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL, TO_EMAIL } = process.env;
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !FROM_EMAIL || !TO_EMAIL) {
        throw new Error("SMTP or email config missing in environment");
    }

    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT || 465),
        secure: Number(SMTP_PORT || 465) === 465,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS
        }
    });

    
    try {
        await transporter.verify();
        console.log("[sendMail] SMTP verified OK");
    } catch (err) {
        console.error("[sendMail] SMTP verify failed:", err);
      
        throw new Error("SMTP connection/credentials problem: " + (err && err.message ? err.message : "unknown"));
    }

    const html = buildHtml(formData);

    const attachments = [];
    if (file && file.buffer) {
        attachments.push({
            filename: file.originalname || "attachment",
            content: file.buffer, 
            contentType: file.mimetype || "application/octet-stream"
        });
    }

    const mailOptions = {
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `New RFQ: ${formData.product || "Product"} — ${formData.name || "Buyer"}`,
        text: `${formData.product || ""} - ${formData.quantity || ""} ${formData.unit || ""}`,
        html,
        attachments
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("[sendMail] message sent, id:", info && (info.messageId || info.accepted));
        return info;
    } catch (err) {
        console.error("[sendMail] sendMail failed:", err);
        
        const msg = err && err.message ? err.message : "Unknown send error";
        throw new Error("Failed to send email: " + msg);
    }
}

module.exports = sendMail;
