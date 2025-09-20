import { PrismaClient } from "@prisma/client";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// REGISTER USER
export const registerUser = async (req, res) => {
  const { firstName, lastName, email, phoneNo, password, role } = req.body;

  if (!firstName || !lastName || !email || !phoneNo || !password || !role) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const existingUser = await prisma.users.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

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

    res.status(201).json({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNo: user.phoneNo,
      role: user.role,
      token: generateToken(user.id),
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);
    res.status(500).json({ message: "Error creating user", error });
  }
};

// GET USER BY EMAIL (QUERY PARAM)
export const getUserByEmailID = async (req, res) => {
  const { email } = req.query;

  try {
    const user = await prisma.users.findUnique({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    return res.status(200).json({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNo: user.phoneNo,
      role: user.role,
    });
  } catch (error) {
    console.error("GET USER ERROR:", error);
    res.status(500).json({ message: "Error fetching user", error });
  }
};

// LOGIN USER
export const loginUser = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const user = await prisma.users.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    if (user.role !== role) {
      return res.status(403).json({ message: "Unauthorized role" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    res.json({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNo: user.phoneNo,
      role: user.role,
      token: generateToken(user.id),
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    res.status(500).json({ message: "Login error", error });
  }
};
