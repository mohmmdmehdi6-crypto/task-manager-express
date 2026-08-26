# Task Manager

## Task Structure

Each task has:

id
title
completed
createdAt

## API Routes

GET /api/tasks/list -> Get all tasks
GET /api/tasks/list?query=home
GET /api/tasks/list?completed=true
GET /api/tasks/detail/:id -> Get one task
POST /api/tasks/create -> Create a new task
PATCH /api/tasks/update/:id -> Update a task
DELETE /api/tasks/delete/:id -> Delete a task

## Folder Structure

index.js -> Main Express file
data/ -> Task data
routes/ -> Task routes
DESIGN.md -> Project design

## Status Codes

200 -> Successful request
201 -> Task created successfully
400 -> Bad request / Invalid data
404 -> Task not found

## Thinking Questions

### 1. Why might you split "routes" from "controllers" instead of writing logic directly in the route file?

I use Router to separate the routes and make the code cleaner.
I don't use controllers in this project.

### 2. If someone requests a task that doesn't exist, what should happen? What status code, and why not just 200?

I return 404 because the task does not exist.
I don't use 200 because the task was not found.

## Stage 3 — Thinking Questions

### 1. How does Express choose the handler?

Express checks the URL. `/files` goes to static files and `/api/tasks` goes to the task router.

### 2. What happens if the file does not exist?

If the file does not exist, Express returns 404.

### 3. Should uploads be public?

No, because users should not see all file names.
