# 🏗️ Full Stack Construction Management System

A production-ready Full Stack application designed for a Construction Company. This system includes a **Public-Facing Website** for customers to view projects and services, and a secure **Admin Dashboard** for the business owner to manage content dynamically.

Built with **Spring Boot 3 (Java 17)**, **React.js**, and **MySQL**.

![Dashboard Preview](https://via.placeholder.com/1000x500?text=Place+Your+Dashboard+Screenshot+Here)

## 🚀 Key Features

### 🔒 Security & Authentication
* **JWT Authentication:** Stateless security using JSON Web Tokens.
* **Role-Based Access:** Public access for visitors; Secured API routes for Admins.
* **Environment Variables:** Sensitive credentials (DB passwords, JWT secrets) secured using `.env`.

### 🛠️ Admin Dashboard (CMS)
* **Project Management:** Create, Read, Update, and Delete (CRUD) construction projects.
* **Service Management:** Dynamic control over the "Services" offered section.
* **Inquiry Inbox:** View contact messages sent by visitors directly from the database.
* **Analytics:** Real-time stats overview (Total Projects, Messages, Active Services).

### 🌐 Public Frontend
* **Dynamic Home Page:** Fetches "Featured Projects" directly from the backend.
* **Responsive Design:** Fully mobile-friendly UI built with **Tailwind CSS**.
* **Contact System:** Functional "Lead Generation" form that saves inquiries to the database.

---

## 💻 Tech Stack

| Component | Technology |
| :--- | :--- |
| **Backend** | Java 17, Spring Boot 3, Hibernate (JPA), Spring Security 6 |
| **Frontend** | React.js (Vite), Tailwind CSS, Axios, Framer Motion |
| **Database** | MySQL 8.0 |
| **Tools** | Postman, Git, Maven, VS Code |

---

## ⚙️ How to Run Locally

### Prerequisites
* Java 17+ installed
* Node.js installed
* MySQL Server running

### 1. Backend Setup
```bash
cd backend
# create a .env file with your DB credentials
# DB_USERNAME=root
# DB_PASSWORD=root
# JWT_SECRET=your_secret_key

./mvnw clean spring-boot:run