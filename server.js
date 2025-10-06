// server.js (root) — API only on :3001
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

// env from root/.env
dotenv.config();

import authRoutes from "./api/routes/authRoutes.js";
import dashboardRoutes from "./api/routes/dashboardRoutes.js";
import messageRoutes from "./api/routes/messageRoutes.js";
import leaseRoutes from "./api/routes/leaseRoutes.js";
import propertyRoutes from "./api/routes/propertyRoutes.js";
import certificateRoutes from "./api/routes/certificateRoutes.js";
import paymentsRoutes from "./api/routes/paymentsRoutes.js";

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.set("trust proxy", 1);

// CORS (for Next dev on 3000)
const allowed = (
  process.env.CORS_ORIGINS ||
  "http://localhost:3000,http://127.0.0.1:3000,http://localhost:3002,http://127.0.0.1:3002"
)
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, cb) {
      if (!origin) return cb(null, true);
      if (allowed.includes(origin)) return cb(null, true);
      return cb(new Error(`Not allowed by CORS: ${origin}`));
    },
    credentials: true,
  })
);
app.options("/:path*", cors());

// parsers
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// health
app.get("/", (_req, res) => res.send("API is running…"));
app.get("/health", (_req, res) =>
  res.json({ ok: true, t: new Date().toISOString() })
);
app.get("/api/health", (_req, res) =>
  res.json({ ok: true, t: new Date().toISOString() })
);

// routes
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/leases", leaseRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/certificates", certificateRoutes);
app.use("/api/payments", paymentsRoutes);

// 404 + errors
app.use((req, res) =>
  res.status(404).json({ error: "Not Found", path: req.originalUrl })
);
app.use((err, _req, res, _next) => {
  const status = err.status || 500;
  const body =
    process.env.NODE_ENV === "production"
      ? { error: err.message || "Server error" }
      : { error: err.message || "Server error", stack: err.stack };
  console.error("[API ERROR]", err);
  res.status(status).json(body);
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
  console.log(`CORS allowed: ${allowed.join(", ") || "(none)"}`);
});
