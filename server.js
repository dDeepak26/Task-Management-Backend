const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());

// Task route
app.use("/api", taskRoutes);

// Test route
app.get("/api", (req, res) => {
  res.json({ message: "All task" });
});

// Connect to MongoDb
connectDB();

// Server Start
app.listen(PORT, () => {
  console.log(`Server is Listening on ${process.env.PORT}...`);
});
