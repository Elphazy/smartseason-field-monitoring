# SmartSeason Field Monitoring System

![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)
![React](https://img.shields.io/badge/react-%3E%3D18.0.0-blue)

A comprehensive full-stack field monitoring system designed for agricultural field management, tracking field stages, updates, and providing real-time monitoring dashboards.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

SmartSeason is a full-stack web application that helps farmers and agricultural managers:
- Monitor multiple fields in real-time
- Track field stages (Planting, Growing, Harvesting, Fallow)
- Log field updates and observations
- View comprehensive dashboards with analytics
- Manage field status and health

**Assessment Type:** Full Stack Developer Technical Assessment (Internship)

## ✨ Features

### Core Features

#### 1. **User Management**
- User registration and authentication
- JWT-based token authentication
- Role-based access control (Farmer, Admin)
- Secure password hashing with bcryptjs
- User profile management

#### 2. **Field Management**
- Create, read, update, and delete fields
- Store field metadata (name, location, area, crop type)
- Field ownership and user association
- Field status tracking (Active, Fallow, Inactive, Alert)
- Geographical data support (latitude, longitude)

#### 3. **Field Updates & Monitoring**
- Log field activities and observations
- Track historical updates with timestamps
- Store measurements and metadata (JSON support)
- Audit trail for all field changes
- Notes and descriptions for each update

#### 4. **Field Stages**
- Track field lifecycle (Planting → Growing → Harvesting → Fallow)
- Automatic stage transitions
- Duration tracking for each stage
- Stage-specific notes and observations
- Sequential stage management

#### 5. **Status Logic**
- Dynamic field status determination
- Status based on current stage and last update
- Alert generation for inactive fields
- Automatic status transitions
- Status history tracking

#### 6. **Dashboard**
- Field overview and summary statistics
- Recent activity feed
- Visual field status indicators
- Quick field access
- Analytics and insights

## 🛠 Tech Stack

### Backend
- **Runtime:** Node.js (v14+)
- **Framework:** Express.js (v4.18+)
- **Database:** PostgreSQL
- **ORM:** Sequelize
- **Authentication:** JWT (jsonwebtoken)
- **Password Hashing:** bcryptjs
- **CORS:** cors
- **Testing:** Jest
- **Environment:** dotenv

### Frontend
- **Library:** React (v18+)
- **Routing:** React Router (v6+)
- **HTTP Client:** Axios
- **State Management:** React Hooks / Context API
- **Styling:** CSS3 / Tailwind CSS (optional)
- **Build Tool:** Create React App

### Database
- **DBMS:** PostgreSQL (v12+)
- **Migrations:** Sequelize migrations
- **Seed Data:** Database seeders

### Tools & DevOps
- **Version Control:** Git
- **Testing Framework:** Jest
- **API Testing:** Postman
- **Deployment:** Heroku / AWS / DigitalOcean
- **Package Manager:** npm / yarn

## 📁 Project Structure




## 🚀 Installation

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v14.0.0 or higher)
- **npm** or **yarn** (v6.0.0 or higher)
- **PostgreSQL** (v12 or higher)
- **Git**

### Step 1: Clone the Repository

```bash
git clone https://github.com/Elphazy/smartseason-field-monitoring.git
cd smartseason-field-monitoring

Step 2: Install Backend Dependencies
cd backend
npm install

Step 3: Install Frontend Dependencies
cd ../frontend
npm install

Step 4: Create PostgreSQL Database
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE smartseason;
CREATE USER smartseason_user WITH PASSWORD 'your_secure_password';
ALTER ROLE smartseason_user SET client_encoding TO 'utf8';
ALTER ROLE smartseason_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE smartseason_user SET default_transaction_deferrable TO on;
GRANT ALL PRIVILEGES ON DATABASE smartseason TO smartseason_user;
\q
⚙️ Configuration
Backend Configuration
1.Create .env file in backend/ directory:
cp backend/.env.example backend/.env
2.Edit backend/.env with your configuration:
# Server
PORT=5000
NODE_ENV=development

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=smartseason
DB_USER=smartseason_user
DB_PASSWORD=your_secure_password

# Authentication
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d

# CORS
CORS_ORIGIN=http://localhost:3000

Frontend Configuration
1.Create .env file in frontend/ directory:
cp frontend/.env.example frontend/.env
2.Edit frontend/.env:
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development

▶️ Running the Application
Option 1: Run Separately (Recommended for Development)
Terminal 1 - Start Backend:
cd backend
npm install
npm run dev
# Server will run on http://localhost:5000
cd backend
npm install
npm run dev
# Server will run on http://localhost:5000
Terminal 2 - Start Frontend:
cd frontend
npm install
npm start
# App will open on http://localhost:3000

Option 2: Run Concurrently (from root directory)
# Install concurrently globally (optional)
npm install -g concurrently

# Run from root if package.json is configured
npm run dev

Verify Installation
1.Backend Health Check:
curl http://localhost:5000/api/health
# Expected: {"message":"Backend is running"}

2.Frontend: Open browser to http://localhost:3000

📚 API Documentation
Complete API documentation is available in docs/API.md
Quick API Overview

| Method | Endpoint                | Description           |
|--------|-------------------------|-----------------------|
| POST   | /api/auth/register      | Register new user     |
| POST   | /api/auth/login         | User login            |
| GET    | /api/auth/profile       | Get user profile      |
| POST   | /api/fields             | Create new field      |
| GET    | /api/fields             | Get all fields        |
| GET    | /api/fields/:id         | Get field by ID       |
| PUT    | /api/fields/:id         | Update field          |
| DELETE | /api/fields/:id         | Delete field          |
| POST   | /api/fields/:id/updates | Add field update      |
| GET    | /api/fields/:id/updates | Get field updates     |
| POST   | /api/fields/:id/stages  | Create field stage    |
| GET    | /api/fields/:id/stages  | Get all stages        |
| GET    | /api/fields/:id/status  | Get field status      |
| GET    | /api/dashboard/summary  | Get dashboard summary |
| GET    | /api/dashboard/recent   | Get recent updates    |

🗄️ Database Schema
Detailed database schema information is in docs/DATABASE.md
Main Tables
users - User accounts and authentication
fields - Agricultural fields and metadata
fieldUpdates - Field activity logs and observations
fieldStages - Field lifecycle stages
fieldStatuses - Historical status records

🧪 Testing
Run Backend Tests
cd backend
npm test

Run with Coverage
npm run test:coverage

Testing API with Postman
1.Import the Postman collection from docs/postman_collection.json
2.Set up environment variables (BASE_URL, TOKEN)
3.Run requests and verify responses

📦 Building for Production
Backend Build
cd backend
npm run build
npm start

Frontend Build
cd frontend
npm run build
# Creates optimized build in 'build' folder

🌐 Deployment
Deploy to Heroku
Backend:
cd backend
heroku create smartseason-api
heroku addons:create heroku-postgresql:hobby-dev
git push heroku main
heroku config:set JWT_SECRET=your_secret_key

Frontend:
cd frontend
npm run build
# Deploy 'build' folder to Netlify or Vercel

🤝 Contributing
Contributions are welcome! Please follow these steps:

1.Fork the repository
2.Create a feature branch (git checkout -b feature/AmazingFeature)
3.Commit changes (git commit -m 'Add some AmazingFeature')
4.Push to the branch (git push origin feature/AmazingFeature)
5.Open a Pull Request

Coding Standards
- Follow ESLint rules  
- Write meaningful commit messages  
- Add tests for new features  
- Update documentation as needed

📝 Project Checklist
### Core Features
- ☑ User Authentication
- ☑ Field Management (CRUD)
- ☑ Field Updates Logging
- ☑ Field Stages Tracking
- ☑ Status Logic Implementation
- ☑ Dashboard

### Quality Assurance
- ☑ Unit Tests (90%+ coverage)
- ☑ Integration Tests
- ☑ E2E Tests
- ☑ Code Review

### Documentation
- ☑ README.md
- ☑ API Documentation
- ☑ Database Schema
- ☑ Setup Guide
- ☑ Architecture Documentation

🐛 Known Issues & Limitations
- Real-time notifications not yet implemented
- Email notifications pending
- Map integration for field locations (future)
- Advanced analytics features (future)

🔮 Future Enhancements
- [ ] Real-time WebSocket updates
- [ ] Email notifications
- [ ] Weather API integration
- [ ] Crop yield predictions
- [ ] Mobile app
- [ ] Advanced analytics dashboard
- [ ] CSV/PDF export functionality
- [ ] Multi-language support

📄 License

👥 Authors
- **Elphazy** - Full Stack Development

📧 Contact & Support
- **Issues:** [GitHub Issues](https://github.com/Elphazy/smartseason-field-monitoring/issues)
- **Email:** mulongoelphas97@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/elphas-wanyonyi

🙏 Acknowledgments
- Assessment requirements and guidance
- Open source community
- PostgreSQL documentation
- Express.js and React documentation

Last Updated: April 2026 Version: 1.0.0 Status: Active Development
- 📖 [API Documentation](https://github.com/copilot/c/docs/API.md)
- 🗄️ [Database Schema](https://github.com/copilot/c/docs/DATABASE.md)
- 🚀 [Setup Guide](https://github.com/copilot/c/docs/SETUP.md)
- 🏗️ [Architecture](https://github.com/copilot/c/docs/ARCHITECTURE.md)
- ✅ [Testing Guide](https://github.com/copilot/c/docs/TESTING.md)
Quick Links
