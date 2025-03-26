const express = require("express");
const router = express.Router();
const Task = require("../model/taskModel");

// Get all tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Create a task
router.post("/tasks", async (req, res) => {
  const { title, description } = req.body;
  // checking if title exists if not showing message
  if (!title) {
    return res.status(404).json({ message: "Title is required" });
  }
  // if title present create post
  try {
    const newTask = Task({
      title,
      description,
    });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Update a task
router.put("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, completed },
      { new: true }
    );

    // checking if task id exists
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Delete a task
router.delete("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTask = await Task.findByIdAndDelete(id);

    // checking if task id exists
    if (!deleteTask) {
      return res.status(404).json({ message: "Task not Found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
