require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan"); // Logging middleware
const connectDB = require("../config/db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); // Logs every request in the terminal

// Database Connection
connectDB();

// Routes
app.use("/api/tasks", require("../routes/taskRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
