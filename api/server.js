// api/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import leaseRoutes from "./routes/leaseRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import certificateRoutes from "./routes/certificateRoutes.js";
import paymentsRoutes from "./routes/paymentsRoutes.js";

const app = express();
const PORT = Number(process.env.PORT) || 3001;
const HOST = process.env.HOST || "127.0.0.1";

app.set("trust proxy", 1);

// CORS
const allowedOrigins = (
  process.env.CORS_ORIGINS || "http://localhost:3000,http://127.0.0.1:3000"
)
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const corsOptions = {
  origin(origin, cb) {
    if (!origin) return cb(null, true); // curl/postman
    if (allowedOrigins.includes(origin)) return cb(null, true);
    return cb(new Error(`Not allowed by CORS: ${origin}`));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("/:path*", cors(corsOptions));

// Parsers
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Health
app.get("/health", (_req, res) =>
  res.status(200).json({ ok: true, t: new Date().toISOString() })
);
app.get("/healthz", (_req, res) =>
  res.status(200).json({ ok: true, t: new Date().toISOString() })
);

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/leases", leaseRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/certificates", certificateRoutes);
app.use("/api/payments", paymentsRoutes);

app.get("/:path*", (_req, res) => res.send("API is running…"));

app.use((req, res) => {
  res.status(404).json({ error: "Not Found", path: req.originalUrl });
});

// Error handler
app.use((err, _req, res, _next) => {
  const status = err.status || 500;
  const payload =
    process.env.NODE_ENV === "production"
      ? { error: err.message || "Server error" }
      : { error: err.message || "Server error", stack: err.stack };
  console.error("[API ERROR]", err);
  res.status(status).json(payload);
});

app.listen(PORT, HOST, () => {
  console.log(`API listening on http://${HOST}:${PORT}`);
  console.log(`CORS allowed: ${allowedOrigins.join(", ") || "(none)"}`);
});
