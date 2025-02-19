Chat Application with AI Model Routing

This project implements a lightweight chat UI integrated with a secure backend server that dynamically routes user prompts based on predefined rules. The application supports user authentication, model listing, chat completions, regex-based routing, and file uploads.

For the Working of the project see

video/

Milestone 1: User Authentication & Models API

JWT-based authentication for secure user access.

API to list available AI models.

Admin-only endpoint to manage AI models.

Milestone 2: Chat API & Static Responses

Authenticated users can send chat messages.

Predefined responses implemented for different AI providers.

Milestone 3: Regex-Based Routing

Dynamic prompt redirection using regex patterns.

CRUD endpoints to manage regex-based routing rules.

Case-insensitive regex handling for better accuracy.

Milestone 4: Web Chat UI

Fully functional frontend chat interface.

Secure authentication and model selection features.

Milestone 5: Admin Panel for Routing Policies

Web-based admin panel for managing routing policies.

Allows admins to create, update, and delete routing rules.

Milestone 6: File Upload Support

PDF upload support in the chat interface.

Backend processes uploaded files and generates appropriate responses.

Milestone 7: Dynamic Routing for File Uploads

Configurable routing logic for uploaded files.

Routes files based on their type to the appropriate AI model.

Setup Instructions

1. Clone the Repository

git clone https://github.com/MohamedAklamaash/UnBound_Security_Hackathon_Backend.git
cd UnBound_Security_Hackathon_Backend

2. Install Dependencies

yarn install

3. Set Up the Database

Ensure you have PostgreSQL running and configure the database.

npx prisma migrate dev

4. Configure Environment Variables

Create a .env file in the backend directory and add the following:

DATABASE_URL=
JWT_SECRET=
TEST_DB_URL=
SENDER_EMAIL=
SENDER_PASSWORD=
SMTP_HOST=
SMTP_PORT=

5. Start the Backend Server

yarn start:dev

6. Start the Frontend Application

yarn dev

Architecture & Design Choices

Backend (NestJS + PostgreSQL)

NestJS is used as the backend framework for modular and scalable development.

JWT authentication ensures secure access control.

Prisma ORM facilitates seamless database interactions with PostgreSQL.

Regex-based routing dynamically manages chat prompts based on predefined rules.

Swagger is used for API documentation.

Frontend (Next.js + TypeScript)

Next.js (TypeScript) provides a robust and scalable frontend.

Tailwind CSS is used for modern and responsive UI design.

REST API is used for seamless communication with the backend.

Admin panel allows easy management of routing policies and user roles.

Usage Workflow

Users register and authenticate via JWT-based login.

Authenticated users can chat with different AI models.

Messages are dynamically routed using regex rules stored in the database.

Admins can configure and modify regex-based routing rules.

Users can upload PDFs, which are processed and routed to specific AI models based on predefined policies.

The frontend provides an intuitive chat UI for seamless user interactions.

API Documentation
(link)[https://unbound-security-hackathon-backend-1.onrender.com/api]

Swagger documentation is available at:
API Documentation

Done By
Mohamed Aklamaash
