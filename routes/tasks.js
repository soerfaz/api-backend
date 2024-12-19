const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/taskControllers");

// Routes
router.get("/", tasksController.getTasks); // Get all tasks with pagination/filter/sort
router.post("/", tasksController.createTask); // Create a new task
router.get("/:id", tasksController.getTaskById); // Get task by ID
router.put("/:id", tasksController.updateTask); // Update task by ID
router.delete("/:id", tasksController.deleteTask); // Delete task by ID

module.exports = router;
