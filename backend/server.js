import express from 'express';
import dotenv from 'dotenv';
import path from "path";
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(express.json());

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 