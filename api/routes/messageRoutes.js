import express from "express";
import {
  sendMessage,
  getMessagesWithUser,
} from "../controller/messageController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, sendMessage); // Send a new message
router.get("/:userId", protect, getMessagesWithUser); // Fetch messages with a specific user

export default router;
