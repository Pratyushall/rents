// authMiddleware.js
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

// Reuse Prisma in dev (avoids “too many clients”)
const globalForPrisma = globalThis;
export const prisma =
  globalForPrisma.__prisma || new PrismaClient({ log: ["warn", "error"] });
if (!globalForPrisma.__prisma) globalForPrisma.__prisma = prisma;

// Extract token from Authorization: Bearer <token> or cookie "token"
function getToken(req) {
  const h = req.headers?.authorization || "";
  if (h.startsWith("Bearer ")) return h.split(" ")[1];
  if (req.cookies?.token) return req.cookies.token;
  return null;
}

// Core protection middleware
export const protect = async (req, res, next) => {
  const token = getToken(req);
  if (!token) {
    return res.status(401).json({ message: "Not authorized: no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // { id, role, iat, exp, ... }

    // Minimal select (faster) + ensure active user
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: { id: true, role: true, email: true, profile: true },
    });

    if (!user) {
      return res.status(401).json({ message: "Not authorized: user missing" });
    }

    // Optional: check token version or soft-deleted flag if you add them later
    req.user = user;
    return next();
  } catch (err) {
    const isExpired = err?.name === "TokenExpiredError";
    return res
      .status(401)
      .json({
        message: isExpired ? "Token expired" : "Not authorized: token invalid",
      });
  }
};

// Role guard (use after `protect`)
export const requireRole =
  (...allowed) =>
  (req, res, next) => {
    if (!req.user) return res.status(401).json({ message: "Not authorized" });
    if (!allowed.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden: insufficient role" });
    }
    return next();
  };

// Example: scope guard for property ownership (landlord-only resources)
export const requireLandlordOwnsProperty = () => async (req, res, next) => {
  try {
    const propertyId = req.params.propertyId || req.body.propertyId;
    if (!propertyId)
      return res.status(400).json({ message: "propertyId required" });

    const property = await prisma.property.findUnique({
      where: { id: propertyId },
      select: { landlordId: true },
    });

    if (!property)
      return res.status(404).json({ message: "Property not found" });
    if (property.landlordId !== req.user.id)
      return res.status(403).json({ message: "Forbidden: not your property" });

    return next();
  } catch (e) {
    return res.status(500).json({ message: "Server error" });
  }
};
