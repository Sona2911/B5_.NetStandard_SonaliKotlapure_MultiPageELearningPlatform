# SonaliKotlapure_.NetFSD_upGrad_B5_Python
Repository for uGE_DotNet FSD (Python) Training - Batch B5_Python - upGrad
---

2nd Project

# 📚🎓👩🏼‍💻 Multi-Page E-Learning Platform (Frontend)

## 📌 Project Overview
TLearnify is a full-stack multi-page E-learning platform that allows users to explore courses, attempt quizzes, and track their performance.

This project is built as part of the .NET Full Stack Development  
---

💻 Tech Stack
1.Frontend
* HTML
* CSS
* Bootstrap
* JavaScript
 
2.Backend
* ASP.NET Core Web API (.NET 8)
* Entity Framework Core
* AutoMapper
* REST APIs

3.Database
* SQL Server
* Relational schema with foreign keys

It allows users to:
- Browse courses
- Attempt quizzes
- Track progress
- View profile and performance
- Dashboard analytics

🏗️ Architecture
* Controller Layer
* Service Layer
* DTO + AutoMapper
* Entity Framework ORM
---
🔌 API Endpoints
1.Users
- POST /api/users/register

2.Courses
- GET /api/courses
- POST /api/courses

3.Lessons
- POST /api/lessons
- GET /api/lessons/course/{courseId}

4.Questions
- POST /api/questions
- Quiz
- POST /api/quizzes/{quizId}/submit

5.Results
- GET /api/results/{userId}
---

⚡ How to Run
* Backend
dotnet run

* Frontend
Open:

index.html
---
## 🚀 Features

### 🔹 Pages
- Dashboard – Overview of progress and statistics  
- Courses – List of available courses  
- Quiz – Dynamic quiz system  
- Profile – User details and history  

---

### 🔹 Functional Highlights
- Dynamic quiz generation using JavaScript  
- Score and grade calculation  
- Progress tracking   
- Breadcrumb navigation  
- Responsive UI using Bootstrap  

---

### 🔹 JavaScript Concepts Used
- Arrays & Objects  
- DOM Manipulation  
- Events (onclick, onchange)  
- Async JavaScript (Promise, async/await, setTimeout)  
- LocalStorage for state management  

---

### 🔹 CSS Features
- CSS Grid (Dashboard)  
- Flexbox (Cards layout)  
- Responsive design (Media Queries)  
- Advanced selectors  

---

### 🔹 Testing (Jest)
- Jest test cases implemented for:
- Percentage calculation  
- Grade calculation  
- Pass/Fail logic  

---

## 🛠️ Technologies Used
- HTML5  
- CSS3  
- Bootstrap 5  
- JavaScript (ES6)  

---

## 🔹 Backend Features (ASP.NET Core)

* RESTful API architecture
* Layered architecture (Controller → Service → Data)
* DTO pattern with AutoMapper
* Entity Framework Core for database operations
* Validation and error handling
* Foreign key relationships maintained

---

## 🔹 API Modules

### 👤 User APIs

* Register user
* Secure password storage using hashing

### 📚 Course APIs

* Create course
* Get all courses

### 📖 Lesson APIs

* Add lesson to course
* Get lessons by course

### 📝 Question APIs

* Get quiz questions dynamically

### 🎯 Quiz APIs

* Submit quiz answers
* Calculate score

### 📊 Result APIs

* Store quiz attempts
* Fetch user results for dashboard

---

## 🔹 Database (SQL Server)

### Tables Used:

* Users
* Courses
* Lessons
* Quizzes
* Questions
* Results

---

### Relationships:

* One User → Many Courses
* One Course → Many Lessons
* One Quiz → Many Questions
* One User → Many Results

---

### SQL Concepts Implemented:

* SELECT queries
* JOIN (User + Results)
* GROUP BY (Average scores)
* AVG (Score calculation)
* UNION
* Subqueries

---

## 🔹 API Endpoints

### Users

* POST `/api/users/register`

### Courses

* GET `/api/courses`
* POST `/api/courses`

### Lessons

* POST `/api/lessons`
* GET `/api/lessons/course/{courseId}`

### Questions

* POST `/api/questions`

### Quiz

* POST `/api/quizzes/{quizId}/submit`

### Results

* GET `/api/results/{userId}`

---

## 🔹 Backend Technologies Used

* ASP.NET Core Web API (.NET 8)
* Entity Framework Core
* AutoMapper
* SQL Server

---

## 🌐 Live Preview

🔗 Click here to view the live project:

👉 https://sona2911.github.io/SonaliKotlapure_.NetFSD_upGrad_B5_Python/
