import express from "express";
import {
  getSongs,
  updateSongStatus,
} from "../controllers/airtable.controller.js";

const router = express.Router();

router.get("/", getSongs);
router.put("/status", updateSongStatus);

export default router;
