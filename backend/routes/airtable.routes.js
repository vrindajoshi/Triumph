import express from "express";
import {
  getSongs,
  updateSongStatus,
} from "../controllers/airtable.controller.js";

const router = express.Router();

router.get("/songs", getSongs);
router.put("/songs/status", updateSongStatus);

export default router;