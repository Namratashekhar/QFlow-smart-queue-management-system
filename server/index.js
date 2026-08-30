import dns from "dns";

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import User from "./models/User.js";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const connectDB = async () => {
      try {
       await mongoose.connect(process.env.MONGODB_URL);
        
            console.log("MongoDB connected");
        }
    catch (error) {
       console.error("MongoDB connection error:",error.message);
    }
};

app.get("/", (req,res) => {
    res.json({
        success:true,
        message: "Server is up and running...",
    });
});

app.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      message: "User registered successfully",
      user: user
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        message: "Invalid password"
      });
    }

    res.status(200).json({
      message: "Login successful",
      user: user
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

const  PORT = process.env.PORT || 8080;

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
    
});

 connectDB();