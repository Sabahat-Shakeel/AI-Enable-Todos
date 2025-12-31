# AI-Enable-Todos
### Description

AI-Enable-Todos is an advanced AI-powered application for managing todo lists. It leverages artificial intelligence to assist users in creating, rendering, and handling todos seamlessly through an interactive UI. The frontend is built with Next.js, while the backend uses FastAPI integrated with OpenAI agents for intelligent task management, connected directly to the UI via API endpoints.

## Tech Stack

- **Frontend:** Next.js (for server-side rendering, static generation, and React-based UI components)
- **Backend:** FastAPI (high-performance web framework for building APIs) with OpenAI-agents for AI-driven assistance
- **Database/Dependencies:** psycopg2-binary for PostgreSQL integration, SQLModel for ORM, and additional libraries like openai for API interactions

### Features

- AI-assisted todo creation, editing, and deletion via chatbot interface
- Real-time rendering of todos in the UI with dynamic updates
- Seamless integration between frontend and backend for efficient data handling
- Support for advanced AI agents to provide contextual suggestions and automation

### Installation
1. Clone the repository: git clone https://github.com/yourusername/AI-Enable-Todos.git
2. Install dependencies: npm install
3. Frontend: Run npm run dev in the root directory for local development (available at http://localhost:3000)
4. Backend: Run uvicorn app:app --reload in the backend directory (available at http://localhost:8000)
5. Ensure the frontend's .env.local points to the backend URL (e.g., NEXT_PUBLIC_API_URL=http://localhost:8000)
6. For production build: npm run build in frontend

---------------------------------------------------------------------------------------------------------------