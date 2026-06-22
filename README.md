AI Travel Planner
Project Overview

AI Travel Planner is a full-stack web application that helps users generate personalized travel itineraries using AI.

Users can:

Register and Login securely
Generate AI-powered travel itineraries
View saved trips
Edit itineraries
Regenerate itinerary days using AI
Get hotel recommendations
Generate packing lists

The application supports multiple users with strict data isolation.

Tech Stack
Frontend

Next.js
TypeScript
Tailwind CSS
Axios

Backend

Node.js
Express.js
MongoDB Atlas
Mongoose
JWT Authentication

AI

Google Gemini API

Features
Authentication

User Registration
User Login
JWT Token Authentication
Protected Routes

Trip Planning

Users provide:

Destination
Number of Days
Budget Type
Interests

AI generates:

Day-wise itinerary
Budget estimation
Hotel recommendations

Trip Management

Save Trips
View Trips
Edit Trip Details
Delete Trips
Regenerate Specific

Packing List Generator

Custom feature added:

Generates a travel packing checklist based on destination and trip type.

Reason:

Helps travelers prepare efficiently and reduces forgotten essentials.

Architecture

Frontend (Next.js)

↓

Backend API (Express)

↓

MongoDB Atlas

↓

Gemini AI Service

Authentication & Authorization

JWT-based authentication is used.

Workflow:

User registers/logs in
Backend generates JWT token
Token stored in browser localStorage
Protected API routes verify token
Users can access only their own trips

Data isolation is enforced using the authenticated user's ID.

Setup Instructions

Backend
cd backend
npm install
npm run dev

Create .env file:
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
GEMINI_API_KEY=your_api_key

Frontend
cd frontend
npm install
npm run dev

Frontend URL:
http://localhost:3000

Backend URL:
http://localhost:5000

API Endpoints
Auth
POST /api/auth/register
POST /api/auth/login

Trips
GET /api/trips
POST /api/trips
PUT /api/trips/
DELETE /api/trips/

AI
POST /api/ai/generate-itinerary
POST /api/ai/regenerate-day
POST /api/ai/packing-list

Deployment
Frontend:
Vercel

Backend:
Render

Database:
MongoDB Atlas

Environment variables are stored securely using deployment platform settings.

Design Decisions
Next.js chosen for modern React development.
MongoDB provides flexible schema for itinerary data.
JWT used for stateless authentication.
Gemini AI used for itinerary generation.
Reusable React components improve maintainability.

Known Limitations
Gemini API quota limits may affect generation.
AI responses may vary between requests.
Hotel recommendations are AI-generated and not real-time booking data.

Future Improvements
Real hotel APIs
Maps integration
Expense tracking
Travel sharing
PDF itinerary export

Author
Shinee
