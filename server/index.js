import dns from "dns";

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import { postLogin, postRegister } from "./controllers/User.js";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Server is up and running..."
  });
});

app.post("/register", postRegister);

app.post("/login", postLogin);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDB();