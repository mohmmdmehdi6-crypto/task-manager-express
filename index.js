const express = require("express");

const { taskRouter } = require("./routers/task");

const task = express();

task.use("/files", express.static("uploads"));

task.use(express.json());

task.use("/api/tasks", taskRouter);

task.listen(3000, () => console.log("express project started"));
