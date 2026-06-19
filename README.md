# Blog Platform with Comments

A full-stack MERN Blog Platform that allows users to create blog posts, interact through comments, and manage content securely using authentication.

---

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes

### Blog Management

* Create Blog Posts
* View All Blog Posts
* View Individual Blog Posts
* Update Blog Posts
* Delete Blog Posts

### Comments System

* Add Comments
* View Comments
* User Interaction on Posts

### Database Integration

* MongoDB Database
* Mongoose ODM
* RESTful API Architecture

### Frontend

* React.js
* React Router DOM
* Axios
* Responsive Modern UI

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS3

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs

---

## Project Structure

BlogPlatform/

├── backend/

│   ├── controllers/

│   ├── middleware/

│   ├── models/

│   ├── routes/

│   ├── config/

│   └── server.js

│

├── frontend/

│   ├── components/

│   ├── pages/

│   ├── services/

│   ├── App.jsx

│   └── main.jsx

│

└── README.md

---

## Installation

### Clone Repository

git clone <repository-url>

cd BlogPlatform

---

### Backend Setup

cd backend

npm install

Create a .env file:

PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/blogplatform

JWT_SECRET=your_secret_key

Run backend:

npm run dev

---

### Frontend Setup

cd frontend

npm install

npm run dev

---

## API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

### Posts

GET /api/posts

GET /api/posts/:id

POST /api/posts

PUT /api/posts/:id

DELETE /api/posts/:id

### Comments

GET /api/comments/:postId

POST /api/comments

DELETE /api/comments/:id

---

## Learning Outcomes

This project helped in understanding:

* Full Stack MERN Development
* REST API Development
* JWT Authentication
* MongoDB Database Design
* React State Management
* React Router Navigation
* Axios API Integration
* Content Management Systems

---

## Author

Anish Reddy

Built as part of Full Stack Web Development Internship Tasks.
