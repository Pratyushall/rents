// api/controller/userController.js
import prisma from "../lib/prisma.js"; // default export from your prisma file
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// ----- Config -----
const JWT_SECRET = process.env.JWT_SECRET || "dev-secret-change-me";
const COOKIE_NAME = "rentease_token";
const COOKIE_OPTS = {
  httpOnly: true,
  sameSite: "lax",
  secure: false, // set true in production behind HTTPS
  path: "/",
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30d
};

const ALLOWED_ROLES = new Set(["ADMIN", "MANAGER", "LANDLORD", "TENANT"]);

// Helpers
function sign(user) {
  return jwt.sign(
    { sub: user.id, role: user.role, email: user.email },
    JWT_SECRET,
    { expiresIn: "30d" }
  );
}

function sanitizeUser(u) {
  if (!u) return null;
  const { password, ...rest } = u;
  return rest;
}

// ================================
// REGISTER USER
// POST /api/auth/signup
// Body: { firstName, lastName, email, phoneNo, password, role }
// ================================
export const registerUser = async (req, res) => {
  try {
    let { firstName, lastName, email, phoneNo, password, role } =
      req.body ?? {};

    if (!firstName || !lastName || !email || !phoneNo || !password || !role) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Normalize
    firstName = String(firstName).trim();
    lastName = String(lastName).trim();
    email = String(email).trim().toLowerCase();
    phoneNo = String(phoneNo).trim();
    role = String(role).trim().toUpperCase();

    if (!ALLOWED_ROLES.has(role)) {
      return res
        .status(400)
        .json({
          message: `Invalid role. Allowed: ${[...ALLOWED_ROLES].join(", ")}`,
        });
    }

    // Uniqueness
    const existingByEmail = await prisma.users.findUnique({ where: { email } });
    if (existingByEmail)
      return res.status(400).json({ message: "User already exists." });

    const existingByPhone = await prisma.users.findUnique({
      where: { phoneNo },
    });
    if (existingByPhone)
      return res
        .status(400)
        .json({ message: "Phone number already registered." });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: {
        firstName,
        lastName,
        email,
        phoneNo,
        password: hashedPassword,
        role,
      },
    });

    const token = sign(user);
    res.cookie(COOKIE_NAME, token, COOKIE_OPTS);

    return res.status(201).json(sanitizeUser(user));
  } catch (error) {
    console.error("REGISTER ERROR:", error);
    return res.status(500).json({ message: "Error creating user" });
  }
};

// =====================================
// GET USER BY EMAIL (QUERY PARAM)
// GET /api/auth/userByEmail?email=...
// =====================================
export const getUserByEmailID = async (req, res) => {
  try {
    const email = String(req.query.email || "")
      .trim()
      .toLowerCase();
    if (!email)
      return res.status(400).json({ message: "email query param required" });

    const user = await prisma.users.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ message: "User not found." });

    return res.status(200).json(sanitizeUser(user));
  } catch (error) {
    console.error("GET USER ERROR:", error);
    return res.status(500).json({ message: "Error fetching user" });
  }
};

// ================================
// LOGIN USER
// POST /api/auth/login
// Body: { email, password }  <-- no role required here
// Sets httpOnly cookie + returns safe user object
// ================================
export const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body ?? {};
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    email = String(email).trim().toLowerCase();

    const user = await prisma.users.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });

    const token = sign(user);
    res.cookie(COOKIE_NAME, token, COOKIE_OPTS);

    // You can also include a bearer token in JSON if your frontend prefers
    // but the httpOnly cookie is the source of truth.
    return res.json({
      ...sanitizeUser(user),
      token, // optional; safe to remove if you rely solely on cookie
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return res.status(500).json({ message: "Login error" });
  }
};

// ================================
// OPTIONAL: ME & LOGOUT ENDPOINTS
// router.get("/me", me)
// router.post("/logout", logout)
// ================================
export const me = async (req, res) => {
  try {
    const cookie = req.cookies?.[COOKIE_NAME];
    const authz = req.headers.authorization || "";
    const bearer = authz.startsWith("Bearer ") ? authz.slice(7) : null;
    const token = cookie || bearer;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    let payload;
    try {
      payload = jwt.verify(token, JWT_SECRET);
    } catch {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await prisma.users.findUnique({ where: { id: payload.sub } });
    if (!user) return res.status(404).json({ message: "User not found" });

    return res.json(sanitizeUser(user));
  } catch (error) {
    console.error("ME ERROR:", error);
    return res.status(500).json({ message: "Error" });
  }
};

export const logout = async (_req, res) => {
  try {
    res.clearCookie(COOKIE_NAME, { ...COOKIE_OPTS, maxAge: 0 });
    return res.json({ ok: true });
  } catch (error) {
    console.error("LOGOUT ERROR:", error);
    return res.status(500).json({ message: "Error" });
  }
};
