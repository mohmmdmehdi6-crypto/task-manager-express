const { allDataTask } = require("../data/task");
const crypto = require("crypto");
const fs = require("fs");

const getAllTasks = (request, response) => {
  const search = request.query.search;
  const completed = request.query.completed;

  if (search) {
    const result = allDataTask.filter((el) =>
      el.title.toLowerCase().includes(search.toLowerCase()),
    );

    return response.status(200).json(result);
  }

  if (completed !== undefined) {
    const result = allDataTask.filter(
      (el) => el.completed === (completed === "true"),
    );

    return response.status(200).json(result);
  }

  return response.status(200).json(allDataTask);
};
const getTaskById = (request, response) => {
  const id = request.params.id;
  const record = allDataTask.find((el) => el.id == id);
  if (!record) {
    response.status(404).json({
      message: "Task not found",
    });
  } else {
    response.status(200).json(record);
  }
};

const createTasks = (request, response) => {
  const body = request.body;

  if (!body.title) {
    return response.status(400).json({
      message: "title is required",
    });
  }
  const newTask = {
    id: crypto.randomInt(1000, 9999),
    title: body.title,
    completed: false,
    createdAt: new Date(),
  };

  allDataTask.push(newTask);

  fs.writeFileSync("./data/tasks.json", JSON.stringify(allDataTask, null, 2));

  response.status(201).json(newTask);
};

const uploadTaskFile = (request, response) => {
  const id = request.params.id;

  const record = allDataTask.find((el) => el.id == id);

  if (!record) {
    return response.status(404).json({
      message: "Task not found",
    });
  }

  const file = request.file;

  record.attachmentPath = `/files/${file.filename}`;

  fs.writeFileSync("./data/tasks.json", JSON.stringify(allDataTask, null, 2));

  response.status(200).json(record);
};

const updateTaskTitle = (request, response) => {
  const id = request.params.id;

  const toDoRecord = allDataTask.find((el) => el.id == id);

  if (!toDoRecord) {
    return response.status(404).json({
      message: "Task not found",
    });
  }

  const body = request.body;

  toDoRecord.title = body.title;

  fs.writeFileSync("./data/tasks.json", JSON.stringify(allDataTask, null, 2));

  response.status(200).json(toDoRecord);
};
const updateTaskCompleted = (request, response) => {
  const id = request.params.id;

  const toDoRecord = allDataTask.find((el) => el.id == id);

  if (!toDoRecord) {
    return response.status(404).json({
      message: "Task not found",
    });
  }

  const body = request.body;

  toDoRecord.completed = body.completed;

  fs.writeFileSync("./data/tasks.json", JSON.stringify(allDataTask, null, 2));

  response.status(200).json(toDoRecord);
};

const deleteTask = (request, response) => {
  const id = request.params.id;

  const record = allDataTask.find((el) => el.id == id);

  if (!record) {
    return response.status(404).json({
      message: "Task not found",
    });
  }

  const newData = allDataTask.filter((el) => el.id != id);

  allDataTask.length = 0;
  allDataTask.push(...newData);

  fs.writeFileSync("./data/tasks.json", JSON.stringify(allDataTask, null, 2));

  response.status(200).json(allDataTask);
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTasks,
  uploadTaskFile,
  updateTaskTitle,
  updateTaskCompleted,
  deleteTask,
};
