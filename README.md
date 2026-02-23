# 🚀 Project Management System - Backend

This is the backend API for the Project Management System built using:

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt for password hashing

---

## 📌 Features

-  User Registration & Login
-  JWT Authentication
- Create Projects
-  Create Tasks
- Assign Tasks to Users
-  Filter Tasks
-  Dashboard Summary API
-  Protected Routes

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- dotenv
- nodemon

---

## 📂 Project Structure

```
backend/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── config/
├── app.js
├── package.json
└── .env
```

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create .env File

Create a `.env` file in root:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ Run Server

### Development Mode

```bash
npm start
```

Your `package.json` script:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "nodemon app.js"
}
```

Server will run on:

```
http://localhost:5000
```

---

## 🔐 Authentication

Protected routes require JWT token in header:

```
Authorization: Bearer <token>
```

---

##  API Endpoints

###  Auth Routes

| Method | Endpoint | Description |
|--------|----------|------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

---

###  Project Routes (Protected)

| Method | Endpoint | Description |
|--------|----------|------------|
| POST | /api/projects | Create Project |
| GET | /api/projects | Get All Projects |

---

###  Task Routes (Protected)

| Method | Endpoint | Description |
|--------|----------|------------|
| POST | /api/tasks | Create Task |
| GET | /api/tasks | Get All Tasks |
| GET | /api/tasks?status=Pending | Filter by Status |
| GET | /api/tasks?projectId=ID | Filter by Project |
| GET | /api/tasks?assignedTo=ID | Filter by Assigned User |

---

##  Dashboard Summary API

| Method | Endpoint | Description |
|--------|----------|------------|
| GET | /api/dashboard | Get summary counts |

Example Response:

```json
{
  "totalProjects": 5,
  "totalTasks": 12,
  "completedTasks": 6,
  "pendingTasks": 6
}
```

---

##  Testing API

You can test using:

- Postman
- Thunder Client (VS Code)

---

##  Author

Your Name
Azhar Khan
---

##  License

This project is for learning/demo purposes.