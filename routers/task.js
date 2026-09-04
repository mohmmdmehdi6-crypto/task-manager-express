const express = require("express");
const validator = require("express-validator");
const { uploader } = require("../utils/files.util");
const taskController = require("../controllers/task.controller");
const taskRouter = express.Router();

taskRouter.get("/", taskController.getAllTasks);

taskRouter.get(
  "/:id",
  [validator.param("id").isInt().withMessage("id must be a number")],
  taskController.getTaskById,
);

taskRouter.post(
  "/",
  [
    validator
      .body("title")
      .isString()
      .isLength({ min: 1, max: 50 })
      .withMessage("title is invalid"),
  ],
  taskController.createTasks,
);
taskRouter.post(
  "/upload/:id",
  [validator.param("id").isInt().withMessage("id must be a number")],
  uploader.single("file"),
  taskController.uploadTaskFile,
);

taskRouter.put(
  "/:id",
  [
    validator.param("id").isInt().withMessage("id must be a number"),

    validator
      .body("title")
      .isString()
      .isLength({ min: 1, max: 50 })
      .withMessage("title is invalid"),
  ],
  taskController.updateTaskTitle,
);
taskRouter.patch(
  "/:id",
  [
    validator.param("id").isInt().withMessage("id must be a number"),

    validator
      .body("completed")
      .isBoolean()
      .withMessage("completed must be boolean"),
  ],
  taskController.updateTaskCompleted,
);
taskRouter.delete(
  "/:id",
  [validator.param("id").isInt().withMessage("id must be a number")],
  taskController.deleteTask,
);
module.exports = { taskRouter };
