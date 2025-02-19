Chat Application with AI Model Routing

This project implements a lightweight chat UI integrated with a secure backend server that dynamically routes user prompts based on predefined rules. The application supports user authentication, model listing, chat completions, regex-based routing, and file uploads.

Features Implemented

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

**Setup Instructions**

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

**Design Choices & Architecture**

Backend (NestJS + PostgreSQL)

NestJS is used as the backend framework.

JWT authentication for security.

Prisma ORM for database interactions with PostgreSQL.

Regex-based routing managed dynamically via stored policies.

Swagger for API documentation.

Frontend (Next.js + TypeScript)

Next.js (TypeScript) for a scalable frontend.

Tailwind CSS for modern UI styling.

REST API communication with the backend.

Admin panel to manage routing policies and user roles.

**Usage Workflow**

Users register and authenticate via JWT-based login.

Authenticated users can chat with different AI models.

Messages are processed and routed dynamically using regex rules stored in the database.

Admins can configure and modify regex-based routing rules.

Users can upload PDFs, which are processed and routed to specific AI models based on predefined policies.

The frontend provides an intuitive chat UI for user interactions.

**API Documentation**

Swagger documentation is available at:

{backend_url}/api

**Future Enhancements**

Support for additional file types (e.g., audio, video).

WebSocket-based real-time chat functionality.

Integration with additional AI providers.

Role-based access control for enhanced security.

This project successfully implements a secure and scalable chat platform with dynamic prompt and file routing.