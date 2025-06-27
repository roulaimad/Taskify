import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Task from "./models/Task.js";

// Load .env variables
dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB connected"))
  .catch((err) => console.error(" DB error:", err));

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post("/tasks", async (req, res) => {
  const { title, status } = req.body;
  const newTask = await Task.create({
    title,
    status: status || "To Do",
  });

  res.json(newTask);
});

app.delete("/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

app.patch("/tasks/:id", async (req, res) => {
  const { status } = req.body;
  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );
  res.json(updatedTask);
});

// Start server
app.listen(3001, () => {
  console.log(" Server running at http://localhost:3001");
});
