# SmartSeason Field Monitoring System

![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)
![React](https://img.shields.io/badge/react-%3E%3D18.0.0-blue)

A comprehensive full-stack field monitoring system designed for agricultural field management, tracking field stages, updates, and providing real-time monitoring dashboards.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Status Logic Explanation](#status-logic-explanation)
- [Demo Credentials](#demo-credentials)
- [Kenyan Agricultural Context](#kenyan-agricultural-context)
- [License](#license)

## Overview

SmartSeason is a full-stack web application that helps farmers and agricultural managers:
- Monitor multiple fields in real-time
- Track field stages (Planted → Growing → Ready → Harvested)
- Log field updates and observations
- View comprehensive dashboards with analytics
- Manage field status and health

**Assessment Type:** Full Stack Developer Technical Assessment (Internship)


## Features

### User Management
- User registration and authentication
- JWT-based token authentication
- Role-based access control (Admin, Field Agent)
- Secure password hashing with bcryptjs
- User profile management

### Field Management
- Create, read, update, and delete fields
- Store field metadata (name, location, area, crop type)
- Field ownership and user association
- Field status tracking (Active, At Risk, Completed)
- Assign fields to field agents

### Field Updates and Monitoring
- Log field activities and observations
- Track historical updates with timestamps
- Store measurements and metadata (JSON support)
- Notes and descriptions for each update

### Field Stages
- Track field lifecycle (Planted → Growing → Ready → Harvested)
- Duration tracking for each stage
- Stage-specific notes and observations

### Status Logic
- Dynamic field status determination
- Active: Currently growing, updated within 7 days
- At Risk: No updates in 7+ days or harvest delayed
- Completed: Successfully harvested

### Dashboard
- Field overview and summary statistics
- Recent activity feed
- Status breakdown by field


## Tech Stack

### Backend
- **Runtime:** Node.js (v14+)
- **Framework:** Express.js
- **Database:** PostgreSQL
- **ORM:** Sequelize
- **Authentication:** JWT (jsonwebtoken)
- **Password Hashing:** bcryptjs

### Frontend
- **Library:** React (v18+)
- **Routing:** React Router
- **HTTP Client:** Axios

### Database
- **DBMS:** PostgreSQL
- **Migrations:** Sequelize migrations
- **Seed Data:** Database seeders


## Project Structure

smartseason-field-monitoring/
├── backend/
│   ├── src/
│   │   ├── config/       # Database configuration
│   │   ├── models/       # Sequelize models
│   │   ├── routes/       # API routes
│   │   ├── controllers/  # Business logic
│   │   ├── middleware/   # Auth and error handling
│   │   ├── seeders/      # Demo data
│   │   └── index.js      # Server entry point
│   ├── .env.example      # Environment template
│   └── package.json      # Dependencies
├── frontend/
│   └── src/              # React application
├── docs/
│   ├── API.md            # API documentation
│   └── DATABASE.md       # Database schema
├── .gitignore
├── LICENSE.txt
└── README.md

## Installation

### Prerequisites
- Node.js (v14.0.0 or higher)
- PostgreSQL (v12 or higher)
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/Elphazy/smartseason-field-monitoring.git
cd smartseason-field-monitoring

# Install backend dependencies
cd backend
npm install

# Configure environment
cp .env.example .env
# Edit .env with your database credentials

# Run database seeder (creates demo accounts)
npm run seed

# Start backend server
npm run dev

**Press Enter after pasting.** Then continue with Part 5.

---

## 📝 **Part 5: Configuration, API, Database**

```bash
cat >> README.md << 'EOF'

## Configuration

Create `.env` file in `backend/` directory:

```env
PORT=5000
NODE_ENV=development

DB_HOST=localhost
DB_PORT=5432
DB_NAME=smartseason
DB_USER=smartseason_user
DB_PASSWORD=your_password

JWT_SECRET=your_secret_key
JWT_EXPIRE=7d

CORS_ORIGIN=http://localhost:3000
Running the Application

Backend

```bash
cd backend
npm run dev
# Server runs on http://localhost:5000
```

Verify Installation

```bash
curl http://localhost:5000/api/health
# Expected: {"message":"Backend is running"}
```

API Documentation

Complete API documentation is available in docs/API.md

Key Endpoints

Method Endpoint Description
POST /api/auth/register Register new user
POST /api/auth/login User login
GET /api/auth/profile Get user profile
GET /api/fields Get all fields
POST /api/fields Create new field
PUT /api/fields/:id Update field
DELETE /api/fields/:id Delete field
POST /api/fields/:id/stages Update field stage
GET /api/dashboard/summary Dashboard summary

Database Schema

Detailed schema documentation is in docs/DATABASE.md

Main Tables

· users - User accounts and authentication
· fields - Agricultural fields and metadata
· field_updates - Activity logs and observations
· field_stages - Lifecycle stage tracking


## Status Logic Explanation

Fields have a computed status based on their current stage and update activity:

| Status | Condition |
|--------|-----------|
| **Active** | Stage is 'planted' or 'growing' AND last update within 7 days |
| **At Risk** | No updates in 7+ days OR stage 'ready' for 14+ days without harvest |
| **Completed** | Stage is 'harvested' |

**Implementation:** Status is calculated dynamically in the fieldController using Sequelize queries.


## Demo Credentials

Use these accounts to test the application:

| Role | Username | Password |
|------|----------|----------|
| Admin | `admin` | `admin123` |
| Field Agent | `agent1` | `agent123` |


## Kenyan Agricultural Context

SmartSeason is designed with Kenyan farming practices in mind.

### Sample Data Includes
| Element | Examples |
|---------|----------|
| **Crops** | Mahindi (Maize), Maharagwe (Beans), Viazi (Potatoes) |
| **Regions** | Kitale (Trans-Nzoia), Njoro (Nakuru), Limuru (Kiambu) |
| **Field Names** | Shamba la Mahindi, Shamba la Maharagwe, Shamba la Viazi |

### Kenya's Growing Seasons
| Season | Months | Activities |
|--------|--------|------------|
| **Long Rains** | March - May | Main planting season |
| **Short Rains** | October - December | Secondary planting season |

### Local Relevance
- Smallholder farmers in Kenyan agricultural counties
- Agricultural extension officers tracking crop progress
- County agricultural departments monitoring food security


## License

This project is licensed under the MIT License - see [LICENSE.txt](LICENSE.txt)


---

**Version:** 1.0.0 | **Status:** Active | **Last Updated:** April 2026
