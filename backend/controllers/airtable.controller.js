import {
  updatePlayedStatusByNameAndPerson,
  getAllSongs,
} from "../models/airtable.model.js";

export async function getSongs(req, res) {
  try {
    const songs = await getAllSongs();

    res.status(200).json(songs);
  } catch (error) {
    console.error("Error fetching songs:", error);
    res.status(500).json({
      error: "Failed to fetch songs",
    });
  }
}

export async function updateSongStatus(req, res) {
  try {
    const { targetSong, targetPerson, played } = req.body;

    if (
      !targetSong ||
      !targetPerson ||
      typeof played !== "boolean"
    ) {
      return res.status(400).json({
        error:
          "targetSong, targetPerson, and played(boolean) are required",
      });
    }

    const result =
      await updatePlayedStatusByNameAndPerson(
        targetSong,
        targetPerson,
        played
      );

    if (result === null) {
      return res.status(404).json({
        error: "Song not found for this user",
      });
    }

    if (result === "MULTIPLE") {
      return res.status(409).json({
        error:
          "Multiple matching songs found — database inconsistency",
      });
    }

    res.status(200).json({
      message: `Song marked as ${played ? "played" : "unplayed"}`,
      song: result.name,
      played: result.played,
    });
  } catch (error) {
    console.error("Error updating song status:", error);
    res.status(500).json({
      error: "Failed to update song status",
    });
  }
}
