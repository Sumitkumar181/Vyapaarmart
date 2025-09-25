const express = require("express");
const cors = require("cors");
const multer = require("multer");
const dotenv = require("dotenv");
const sendMail = require("./api/sendMail");
const db = require("./config/db");

// routes
const authRoutes = require('./routes/authRoutes')
const productCategoryRoutes = require('./routes/productCategoryRoutes')
const productRoutes = require('./routes/productRoutes')
const supplierRoutes = require('./routes/supplierRoutes')

dotenv.config();

const app = express();

// const rawOrigins = process.env.CORS_ORIGIN || "";
// const allowedOrigins = rawOrigins
//   .split(",")
//   .map((s) => s.trim())
//   .filter(Boolean);

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin) {
//       return callback(null, true);
//     }
//     if (allowedOrigins.includes("*")) {
//       return callback(null, true);
//     }
//     if (allowedOrigins.indexOf(origin) !== -1) {
//       return callback(null, true);
//     }
//     console.warn(`[CORS] Blocked origin: ${origin}`);
//     return callback(new Error("Not allowed by CORS"));
//   },
//   methods: ["GET", "POST", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization", "Accept"],
//   credentials: true,
//   optionsSuccessStatus: 204,
// };

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes-------
app.use('/api/auth',authRoutes)
app.use('/api/product_category',productCategoryRoutes)
app.use('/api/product',productRoutes)
app.use('/api/seller',supplierRoutes)

// const upload = multer({
//   storage: multer.memoryStorage(),
//   limits: { fileSize: 4_500_000 },
// });

// app.get("/", (req, res) => res.send("API is running fine!"));
// app.get("/_health", (req, res) => res.json({ ok: true, ts: Date.now() }));

// async function handleRequest(req, res) {
//   console.log(
//     "[/send-email] headers content-type:",
//     req.headers["content-type"]
//   );
//   console.log(
//     "[/send-email] body preview:",
//     Object.keys(req.body).length ? req.body : "(empty)"
//   );
//   if (req.file) {
//     console.log("[/send-email] file:", {
//       name: req.file.originalname,
//       size: req.file.size,
//       mimetype: req.file.mimetype,
//     });
//   }

//   const incoming = {};
//   for (const k in req.body || {}) {
//     const v = req.body[k];
//     incoming[k] = typeof v === "string" ? v.trim() : v;
//   }

//   const file = req.file || null;

//   const required = ["product", "quantity", "name", "email"];
//   const missing = required.filter((k) => !incoming[k]);
//   if (missing.length) {
//     console.warn("[/send-email] Missing fields:", missing);
//     return res
//       .status(400)
//       .json({ ok: false, message: `Missing fields: ${missing.join(", ")}` });
//   }

//   try {
//     await sendMail(incoming, file);
//     return res
//       .status(200)
//       .json({ ok: true, message: "Email sent successfully!" });
//   } catch (err) {
//     console.error(
//       "[/send-email] sendMail error:",
//       err && err.stack ? err.stack : err
//     );

//     const msg = err && err.message ? err.message : "Internal Server Error";
//     return res.status(500).json({ ok: false, message: msg });
//   }
// }

// app.post("/send-email", (req, res, next) => {
//   const contentType = req.headers["content-type"] || "";
//   const isMultipart = contentType.includes("multipart/form-data");
//   if (isMultipart) {
//     upload.single("file")(req, res, function (err) {
//       if (err) {
//         console.error("[/send-email] multer error:", err);
//         if (err.code === "LIMIT_FILE_SIZE") {
//           return res
//             .status(413)
//             .json({ ok: false, message: "File too large. Max 4.5MB allowed." });
//         }
//         return res
//           .status(400)
//           .json({ ok: false, message: err.message || "File upload error" });
//       }

//       handleRequest(req, res).catch(next);
//     });
//   } else {
//     handleRequest(req, res).catch(next);
//   }
// });

app.use((err, req, res, next) => {
  console.error("[global error]", err && err.stack ? err.stack : err);
  res.status(500).json({ ok: false, message: err.message || "Server error" });
});

db();

app.listen(3000, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});

module.exports = app;
