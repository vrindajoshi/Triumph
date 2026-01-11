import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import airtableRoutes from "./routes/airtable.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/airtable", airtableRoutes);

// fallback
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
