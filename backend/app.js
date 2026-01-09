import express from "express";
import cors from "cors";

import airtableRoutes from "./routes/airtable.routes.js";
import healthRoutes from "./routes/health.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", healthRoutes);
app.use("/api/airtable", airtableRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

export default app;
