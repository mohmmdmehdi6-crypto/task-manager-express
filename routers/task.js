const express = require("express");
const { uploader } = require("../utils/files.util");
const taskController = require("../controllers/task.controller");

const taskRouter = express.Router();

taskRouter.get("/", taskController.getAllTasks);

taskRouter.get("/:id", taskController.getTaskById);

taskRouter.post("/", taskController.createTasks);

taskRouter.post(
  "/upload/:id",
  uploader.single("file"),
  taskController.uploadTaskFile
);

taskRouter.put("/:id", taskController.updateTaskTitle);

taskRouter.patch("/:id", taskController.updateTaskCompleted);

taskRouter.delete("/:id", taskController.deleteTask);

module.exports = { taskRouter };