import express from 'express';
import { getSongs, createSongs, updateSongs } from '../controllers/airtable.controller.js';

const router = express.Router();

// endpoint to create a new song (POST request to /api/song)
router.post("/", createSongs); // creates the /products endpoint

// endpoint to get all songs (GET request to /api/song)
router.get("/", getSongs);

// endpoint to update a song by id (PUT request to /api/products/:id)
router.put("/update-by-fields", updateSongs ); // creates the /products/:id endpoint

export default router;