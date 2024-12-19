const tasks = require("../config/database");

// GET ALL TASKS (with pagination, filtering, and sorting)
exports.getTasks = (req, res) => {
  let { page = 1, limit = 5, sort = "id", filter, order = "asc" } = req.query;

  let results = [...tasks];

  // Filtering
  if (filter) {
    results = results.filter((task) =>
      task.title.toLowerCase().includes(filter.toLowerCase())
    );
  }

  // Sorting
  results.sort((a, b) => {
    if (order === "desc") return b[sort] > a[sort] ? 1 : -1;
    return a[sort] > b[sort] ? 1 : -1;
  });

  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedResults = results.slice(startIndex, endIndex);

  res.json({
    total: results.length,
    page: parseInt(page),
    limit: parseInt(limit),
    tasks: paginatedResults,
  });
};

// CREATE A NEW TASK
exports.createTask = (req, res) => {
  const { title, completed = false, priority = "Medium" } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    completed,
    priority,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};

// GET TASK BY ID
exports.getTaskById = (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.json(task);
};

// UPDATE TASK BY ID
exports.updateTask = (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  const { title, completed, priority } = req.body;

  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;
  if (priority !== undefined) task.priority = priority;

  res.json(task);
};

// DELETE TASK BY ID
exports.deleteTask = (req, res) => {
  const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  tasks.splice(index, 1);
  res.json({ message: "Task deleted successfully" });
};
