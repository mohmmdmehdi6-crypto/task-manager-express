const express = require("express");
const { allDataTask } = require("../data/task");
const crypto = require("crypto");

const taskRouter = express.Router();

taskRouter.get("/list", (request, response) => {
  response.status(200).json(allDataTask);
  console.log("suucces");
});

taskRouter.get("/detail/:id", (request, response) => {
  const id = request.params.id;
  const record = allDataTask.find((el) => el.id == id);
  if (!record) {
    response.status(404).json({
      message: "Task not found",
    });
  } else {
    response.status(200).json(record);
  }
});

taskRouter.post("/create", (request, response) => {
  const body = request.body;

  if (!body.title) {
    return response.status(400).json({
      message: "title is required",
    });
  }
  allDataTask.push({
    id: crypto.randomInt(1000, 9999),
    title: body.title,
    completed: false,
    createdAt: new Date(),
    attachmentPath: body.attachmentPath,
  });
  response.status(201).json(allDataTask);
});

taskRouter.patch("/update/:id", (request, response) => {
  const id = request.params.id;

  const toDoRecord = allDataTask.find((el) => el.id == id);

  if (!toDoRecord) {
    return response.status(404).json({
      message: "Task not found",
    });
  }

  const body = request.body;

  toDoRecord.title = body.title;
  toDoRecord.completed = body.completed;

  response.status(200).json(toDoRecord);
});
taskRouter.delete("/delete/:id", (request, response) => {
  const id = request.params.id;

  const record = allDataTask.find((el) => el.id == id);

  if (!record) {
    return response.status(404).json({
      message: "Task not found",
    });
  }

  const index = allDataTask.indexOf(record);

  allDataTask.splice(index, 1);

  response.status(200).json(allDataTask);
});
module.exports = { taskRouter };
