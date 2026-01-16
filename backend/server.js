import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import airtableRoutes from "./routes/airtable.routes.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Server is working!' });
});

// routes
app.use("/api/airtable", airtableRoutes);

// fallback
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Global error handlers
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('❌ Unhandled Rejection:', err);
  process.exit(1);
});

// start server
const server = app.listen(PORT, () => {
  console.log(`✅ Ready to accept requests`);
});

server.on('error', (err) => {
  console.error('❌ Server startup error:', err);
  process.exit(1);
});

// Keep alive
setInterval(() => {
  console.log('Server still running...');
}, 30000);