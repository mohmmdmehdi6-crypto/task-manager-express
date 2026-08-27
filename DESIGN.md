# Task Manager

## Task Structure

Each task has:

id
title
completed
createdAt
attachmentPath

## API Routes

GET /api/tasks/list -> Get all tasks
GET /api/tasks/list?query=home -> Search tasks
GET /api/tasks/list?completed=true -> Filter tasks by completion status
GET /api/tasks/detail/:id -> Get one task
POST /api/tasks/create -> Create a new task
POST /api/tasks/upload/:id -> Upload a file for a specific task
PUT /api/tasks/update/:id -> Update the task title
PATCH /api/tasks/update/:id -> Update the task completion status
DELETE /api/tasks/delete/:id -> Delete a task

## Folder Structure

index.js -> Main Express file
data/ -> Task data and JSON persistence
routers/ -> Task routes
controllers/ -> Request logic and controllers
utils/ -> File upload utilities
uploads/ -> Uploaded files
DESIGN.md -> Project design
RETRO.md -> Project reflection

## Status Codes

200 -> Successful request
201 -> Task created successfully
400 -> Bad request / Invalid data
404 -> Task not found
