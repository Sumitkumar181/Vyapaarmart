const express = require("express");
const cors = require("cors");
const multer = require("multer");
const dotenv = require("dotenv");
const sendMail = require("./api/sendMail");


dotenv.config();

const app = express();


const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";


app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 4_500_000 } // 4.5 MB
});


app.get("/", (req, res) => res.send("API is running fine!"));
app.get("/_health", (req, res) => res.json({ ok: true, ts: Date.now() }));


async function handleRequest(req, res) {
  
    console.log("[/send-email] headers content-type:", req.headers["content-type"]);
    console.log("[/send-email] body preview:", Object.keys(req.body).length ? req.body : "(empty)");
    if (req.file) {
        console.log("[/send-email] file:", { name: req.file.originalname, size: req.file.size, mimetype: req.file.mimetype });
    }

    
    const incoming = {};
    for (const k in req.body || {}) {
        const v = req.body[k];
        incoming[k] = typeof v === "string" ? v.trim() : v;
    }

    const file = req.file || null;

    
    const required = ["product", "quantity", "name", "email"];
    const missing = required.filter(k => !incoming[k]);
    if (missing.length) {
        console.warn("[/send-email] Missing fields:", missing);
        return res.status(400).json({ ok: false, message: `Missing fields: ${missing.join(", ")}` });
    }

    try {
        await sendMail(incoming, file);
        return res.status(200).json({ ok: true, message: "Email sent successfully!" });
    } catch (err) {
        console.error("[/send-email] sendMail error:", err && err.stack ? err.stack : err);
        
        const msg = err && err.message ? err.message : "Internal Server Error";
        return res.status(500).json({ ok: false, message: msg });
    }
}


app.post("/send-email", (req, res, next) => {
    const contentType = req.headers["content-type"] || "";
    const isMultipart = contentType.includes("multipart/form-data");
    if (isMultipart) {
      
        upload.single("file")(req, res, function (err) {
            if (err) {
                console.error("[/send-email] multer error:", err);
                if (err.code === "LIMIT_FILE_SIZE") {
                    return res.status(413).json({ ok: false, message: "File too large. Max 4.5MB allowed." });
                }
                return res.status(400).json({ ok: false, message: err.message || "File upload error" });
            }
            
            handleRequest(req, res).catch(next);
        });
    } else {
        
        handleRequest(req, res).catch(next);
    }
});


app.use((err, req, res, next) => {
    console.error("[global error]", err && err.stack ? err.stack : err);
    res.status(500).json({ ok: false, message: err.message || "Server error" });
});

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});
