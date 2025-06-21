# Apartment Listing App

A full-stack web application for listing, searching, and managing apartments. Built with a modern tech stack, featuring a robust backend API and a beautiful, responsive frontend.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Running with Docker](#running-with-docker)
  - [Running Locally (Without Docker)](#running-locally-without-docker)
- [API Documentation & Postman Collection](#api-documentation--postman-collection)
- [Environment Variables](#environment-variables)
- [License](#license)

---

## Project Overview

This project consists of two main parts:
- **Backend**: A RESTful API built with Node.js, Express, and MongoDB for managing apartment data.
- **Frontend**: A Next.js (React) application for users to browse, search, and add apartments with a modern UI.

---

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- TypeScript
- Docker
- Helmet, CORS, Rate Limiting (Security)

### Frontend
- Next.js (App Router, React 18+)
- TypeScript
- Tailwind CSS
- Axios
- Docker

---

## Features
- Apartment listing with pagination and search
- View single apartment details
- Add new apartments via a form
- Modular, reusable React components
- RESTful API with DTOs and clean architecture
- Rate limiting and security best practices
- Ready for production with Docker
- Postman collection for easy API testing

---

## Project Structure

```
/ (root)
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── repository/
│   │   ├── service/
│   │   ├── app.ts
│   │   └── ...
│   ├── Dockerfile
│   └── ...
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── public/
│   ├── Dockerfile
│   └── ...
│
├── docker-compose.yml
├── Apartment Listing.postman_collection.json
└── README.md
```

---

## Getting Started

### Running with Docker

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd apartment-listing-app
   ```
2. **Configure environment variables:**
   - Copy `.env.example` to `.env` in both `backend/` and `frontend/` if provided, and adjust as needed.
3. **Start the app with Docker Compose:**
   ```sh
   docker-compose up --build
   ```
4. **Access the app:**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:5000/api/apartments](http://localhost:5000/api/apartments)

### Running Locally (Without Docker)

#### Backend
1. Install dependencies:
   ```sh
   cd backend
   npm install
   ```
2. Set up your `.env` file (see `.env.example`).
3. Start MongoDB (locally or with Docker).
4. Run the backend:
   ```sh
   npm run dev
   ```

#### Frontend
1. Install dependencies:
   ```sh
   cd frontend
   npm install
   ```
2. Set up your `.env.local` file (see `.env.example`).
3. Run the frontend:
   ```sh
   npm run dev
   ```
4. Visit [http://localhost:3000](http://localhost:3000)

---

## API Documentation & Postman Collection

- The API is documented in the included Postman collection: `Apartment Listing.postman_collection.json`.
- To use:
  1. Open Postman.
  2. Import the collection file.
  3. Use the provided requests to test all API endpoints (list, search, add, get by ID, etc).

---

## Environment Variables

- **Backend**: Configure MongoDB URI, port, and other settings in `backend/.env`.
- **Frontend**: Set `NEXT_PUBLIC_BACKEND_URL` in `frontend/.env.local` to point to the backend API.

---

## License

This project is licensed under the MIT License.

---

**For any questions or contributions, please open an issue or pull request.**
