const fs = require("fs");

const data = fs.readFileSync("./data/tasks.json", "utf-8");

let allDataTask = JSON.parse(data);

module.exports = { allDataTask };