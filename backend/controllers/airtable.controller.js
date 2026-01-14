import {
  updatePlayedStatusByNameAndPerson,
  getAllSongs,
} from "../models/airtable.model.js";

export async function getSongs(req, res) {
  console.log('=== getSongs called ===');
  console.log('Query params:', req.query);
  
  try {
    console.log('Attempting to fetch all songs...');
    let songs = await getAllSongs();
    console.log('✅ Songs fetched successfully:', songs.length);
    
    const { personId } = req.query;
    
    if (personId) {
      console.log('Filtering by personId:', personId);
      songs = songs.filter(song => song.id === personId);
      console.log('Filtered songs:', songs.length);
    }
    
    res.status(200).json(songs);
  } catch (error) {
    console.error("❌ Error fetching songs:", error);
    console.error("Error details:", error.message);
    console.error("Stack trace:", error.stack);
    res.status(500).json({
      error: "Failed to fetch songs",
      details: error.message
    });
  }
}

export async function updateSongStatus(req, res) {
  try {
    const { name, personId, played } = req.body;
    
    if (!name || !personId || typeof played !== "boolean") {
      return res.status(400).json({
        error: "name, personId, and played (boolean) are required",
      });
    }
    
    const result = await updatePlayedStatusByNameAndPerson(
      name,
      personId,
      played
    );
    
    if (result === null) {
      return res.status(404).json({
        error: "Song not found for this user",
      });
    }
    
    if (result === "MULTIPLE") {
      return res.status(409).json({
        error: "Multiple matching songs found — database inconsistency",
      });
    }
    
    res.status(200).json({
      message: `Song marked as ${played ? "played" : "unplayed"}`,
      recordId: result.recordId,
      name: result.name,
      played: result.played,
    });
  } catch (error) {
    console.error("Error updating song status:", error);
    res.status(500).json({
      error: "Failed to update song status",
    });
  }
}