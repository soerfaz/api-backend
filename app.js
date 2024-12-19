const express = require("express");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/tasks");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use("/api/tasks", taskRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Task Management API");
});

// Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
