# AI-Driven Assessment Platform

A modern assessment platform built with React, Python Flask, and MongoDB, offering adaptive testing capabilities with multiple difficulty levels and real-time progress tracking.

## 🚀 Features

- **Multi-Level Assessment**
  - Beginner to Advanced skill levels
  - Adaptive difficulty scaling
  - Real-time progress tracking

- **Smart Question Management**
  - Randomized question selection
  - Dynamic option shuffling
  - Automatic scoring system

- **User Experience**
  - Clean, modern interface
  - Real-time feedback
  - Progress analytics

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript, Vite
- **Backend**: Python Flask
- **Database**: MongoDB

## 📋 Prerequisites

- Python 3.12
- Node.js (Latest LTS)
- MongoDB
- Git

## 🔧 Quick Start

```bash
# Clone repository
git clone <repository-url>
cd Assesment
```
```bash
# Start MongoDB
brew services start mongodb-community
```
```bash
# Setup Backend
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```
```bash
# Setup Frontend
cd ../frontend
npm install
```
## 🌐 Development Servers
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- MongoDB: mongodb://localhost:27017

## MongoDB Configuration
1. First, ensure MongoDB is running:
```
brew services start mongodb-community
```
2. Configure the MongoDB connection in `config.py` :
```
MONGODB_URI = "mongodb://localhost:27017/
assessment_db"

class Config:
    SECRET_KEY = 'your-secret-key-here'
    DEBUG = True
```

## Running the Full Stack Application
1. Start MongoDB (if not already running):
```
brew services start mongodb-community
```
2. Start the Backend Server (in a new terminal):
```
cd backend
source ../venv/bin/activate
python app.py
```
Verify at: http://localhost:5000

3. Start the Frontend Development Server (in another terminal):
```
cd frontend
npm run dev
```
Verify at: http://localhost:3000

## Verification Steps
1. MongoDB Connection:
```
mongosh "mongodb://localhost:27017/
assessment_db"
```
2. Backend API Health Check:
```
curl http://localhost:5000
```
Expected response: {"message": "Assessment API is running", "status": "running"}

3. Frontend Application:
- Open http://localhost:3000 in your browser
- You should see the assessment platform interface
## Port Configuration
Make sure these ports are available:

- MongoDB: 27017
- Backend: 5000
- Frontend: 3000