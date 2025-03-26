## Task Management App

[LIVE LINK](https://task-management-frontend-ddeepak26s-projects.vercel.app/)

[FRONTEND REPO LINK](https://github.com/dDeepak26/Task-Management-frontend)

**Installation**

- clone the repo
- npm install
- create env file -> PORT, URI
- node server.js

## Task API Documentation

**Base URL**

`http://localhost:8000/api`

---

### 1. Get All Tasks

**GET /tasks**

**Description**  
Fetch all tasks from the database.

**Response**

- **200**: Returns an array of all tasks.
- **500**: Server error.

**Example Response**

```json
[
  {
    "_id": "123456",
    "title": "Task 1",
    "description": "Description for Task 1",
    "completed": false
  }
]
```

### 2. Create a Tasks

**POST /tasks**

**Description**  
Create a new task with a title and an optional description.

**Request Body**

```json
{
  "title": "New Task",
  "description": "Task description here"
}
```

**Response**

- **201**: Task created successfully.
- **404**: Title is required.
- **500**: Server error.

**Example Response**

```json
{
  "_id": "123456",
  "title": "New Task",
  "description": "Task description here",
  "completed": false
}
```

### 3. Update a Tasks

**PUT /tasks/:id**

**Description**  
Update a task by its ID.

**Request Params**
`id`: Task ID (required)

**Request Body**

```json
{
  "title": "Updated Task Title",
  "description": "Updated description",
  "completed": true
}
```

**Response**

- **200**: Task updated successfully.
- **404**: Task not found.
- **500**: Server error.

**Example Response**

```json
{
  "_id": "123456",
  "title": "Updated Task Title",
  "description": "Updated description",
  "completed": true
}
```

### 4. Delete a Tasks

**DELETE /tasks/:id**

**Description**  
Delete a task by its ID.

**Request Params**
`id`: Task ID (required)

**Response**

- **200**: Task deleted successfully.
- **404**: Task not found.
- **500**: Server error.
