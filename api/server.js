// api/server.js

import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Import route modules
import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import leaseRoutes from "./routes/leaseRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import certificateRoutes from "./routes/certificateRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config();

const app = express();

// Allow frontend on localhost:3000 (or override via ENV)
app.use(
  cors({
    origin: "http://localhost:3000", // your Next.js dev URL
    credentials: true,
  })
);

// Parse JSON bodies
app.use(express.json());

// Mount all routes under their paths
app.use("/api/users", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/leases", leaseRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/certificates", certificateRoutes);
app.use("/api/payments", paymentRoutes);

// Default health check
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
