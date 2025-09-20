import express from "express";
import {
  registerUser,
  loginUser,
  getUserByEmailID,
} from "../controller/userController.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/userByEmail", getUserByEmailID);

export default router;
