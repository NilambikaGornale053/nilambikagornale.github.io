# MERN User Management System

A full-stack CRUD application built with **React.js, Node.js, Express.js, and MongoDB Atlas** to manage user records with persistent database storage.

### ✨ Features
- Create, view, update, and delete users.
- Store user data in MongoDB Atlas.
- Integrate frontend and backend using REST APIs and Axios.
- Responsive UI built with Bootstrap.
- Handle API requests and errors.

### 🛠️ Tech Stack
- **Frontend:** React.js, Axios, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas, Mongoose
- **Tools:** Git, GitHub, dotenv, CORS

### 📁 Project Structure
```text
DELTAREACT/
├── input/              # React frontend
└── backend/
    └── backend/        # Express backend
```

### 🚀 Getting Started

**1. Clone the repository**
```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

**2. Start the backend**
```bash
cd backend/backend
npm install
node server.js
```

**3. Start the frontend in a new terminal**
```bash
cd input
npm install
npm run dev
```

Configure your MongoDB Atlas connection string in the backend `.env` file before starting the server.

### 📡 API Endpoints

| Method | Endpoint | Action |
|---|---|---|
| GET | `/api/users` | Fetch users |
| POST | `/api/users` | Create a user |
| PUT | `/api/users/:id` | Update a user |
| DELETE | `/api/users/:id` | Delete a user |
