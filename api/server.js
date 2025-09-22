// api/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Route modules
import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import leaseRoutes from "./routes/leaseRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import certificateRoutes from "./routes/certificateRoutes.js";
// ⬇️ Make sure the file is named exactly `paymentsRoutes.js` (plural) to avoid case/typo issues
import paymentsRoutes from "./routes/paymentsRoutes.js";

dotenv.config();

const app = express();

// ---- CORS (env-driven; supports multiple origins) ----
const allowedOrigins = (process.env.CORS_ORIGINS || "http://localhost:3000")
  .split(",")
  .map((s) => s.trim());

app.use(
  cors({
    origin: (origin, cb) => {
      // allow non-browser clients (no origin) and allowed origins
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// ---- Parsers ----
app.use(express.json({ limit: "5mb" }));

// ---- Health ----
app.get("/healthz", (_req, res) => res.status(200).json({ ok: true }));

// ---- Mount routes (consistent, predictable prefixes) ----
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/leases", leaseRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/certificates", certificateRoutes);
app.use("/api/payments", paymentsRoutes);

// ---- Root ----
app.get("/", (_req, res) => res.send("API is running…"));

// ---- 404 ----
app.use((req, res) => {
  res.status(404).json({ error: "Not Found", path: req.originalUrl });
});

// ---- Error handler ----
app.use((err, _req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || "Server error";
  if (process.env.NODE_ENV !== "production") {
    console.error("API Error:", err);
  }
  res.status(status).json({ error: message });
});

// ---- Start server ----
const PORT = process.env.PORT || 3001;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 API listening on http://0.0.0.0:${PORT}`);
});
