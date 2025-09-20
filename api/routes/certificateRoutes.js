import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  uploadCertificate,
  getMyCertificates,
} from "../controller/certificateController.js";

const router = express.Router();
router.use(protect);

router.get("/my", getMyCertificates);
router.post("/upload", uploadCertificate);

export default router;
