const express = require("express");
const { uploader } = require("../utils/files.util");
const taskController = require("../controllers/task.controller");
const taskRouter = express.Router();

taskRouter.get("/list", taskController.getAllTasks);

taskRouter.get("/detail/:id", taskController.getTaskById);

taskRouter.post("/create", taskController.createTasks);
taskRouter.post(
  "/upload/:id",
  uploader.single("file"),
  taskController.uploadTaskFile,
);
taskRouter.put("/update/:id", taskController.updateTaskTitle);

taskRouter.patch("/update/:id", taskController.updateTaskCompleted);
taskRouter.delete("/delete/:id", taskController.deleteTask);

module.exports = { taskRouter };
