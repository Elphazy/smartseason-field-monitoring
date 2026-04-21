# SmartSeason Field Monitoring API Documentation

## Overview
The SmartSeason Field Monitoring System API provides access to various endpoints to manage and monitor fields effectively. This documentation covers a total of 22 endpoints including authentication, field management, field updates, field stages, dashboard, and more.

## Authentication
- **Authentication Method:** Bearer Token
- **Token Generation:** Obtain a token by signing up on the SmartSeason platform.
- **Usage:** Include the token in the `Authorization` header of each request.

## Endpoints

### 1. Authentication
- **POST** `/auth/login`
  - **Description:** Login user and returns an access token.
  - **Request Body:** `{ "username": "user", "password": "pass" }`
  - **Response:** `{ "token": "your_access_token" }`

### 2. Get Fields
- **GET** `/api/fields`
  - **Description:** Retrieve a list of fields.

### 3. Create Field
- **POST** `/api/fields`
  - **Description:** Create a new field.
  - **Request Body:** `{ "name": "Field 1", "location": "Location A" }`

### 4. Update Field
- **PUT** `/api/fields/{id}`
  - **Description:** Update specific field details.

### 5. Delete Field
- **DELETE** `/api/fields/{id}`
  - **Description:** Remove a field from the system.

### 6. Get Field Details
- **GET** `/api/fields/{id}`
  - **Description:** Retrieve details of a specific field.

### 7. Manage Field Stages
- **POST** `/api/fields/{id}/stages`
  - **Description:** Add stages to a field.

### 8. Update Field Stage
- **PUT** `/api/fields/{id}/stages/{stage_id}`
  - **Description:** Update a field's stage details.

### 9. Get Dashboard Data
- **GET** `/api/dashboard`
  - **Description:** Retrieve dashboard summary data.

### 10. Rate Limiting
- **Description:** API requests are limited to 100 requests per hour.
  - **Exceeding Limit:** Users will receive a `429 Too Many Requests` status.

## HTTP Status Codes
- 200 OK - Request succeeded.
- 201 Created - Resource was created successfully.
- 204 No Content - Request succeeded, no content to return.
- 400 Bad Request - The request was invalid.
- 401 Unauthorized - Authentication failed.
- 403 Forbidden - Access denied.
- 404 Not Found - Resource not found.
- 429 Too Many Requests - Rate limit exceeded.
- 500 Internal Server Error - Server encountered an error.

## Code Examples

### Example 1: Authenticate
```javascript
fetch('/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: 'user', password: 'pass' })
}).then(response => response.json()).then(data => {
  console.log(data.token);
});
fetch('/api/fields', {
  headers: { 'Authorization': 'Bearer your_access_token' }
}).then(response => response.json()).then(data => {
  console.log(data);
});

### Create DATABASE.md in docs folder:

```bash
cat > docs/DATABASE.md << 'EOF'
# Database Schema Documentation for SmartSeason Field Monitoring

## Overview
This document provides a comprehensive overview of the database schema used in the SmartSeason Field Monitoring project. The database is designed to manage various aspects of field monitoring, including sensor data, user information, and system configurations.

## Entities

### 1. Users
- **Table Name**: `users`
- **Description**: Stores user information.
- **Schema**:
  - `id` (INT, PRIMARY KEY, AUTO_INCREMENT): Unique identifier for each user.
  - `username` (VARCHAR(50), UNIQUE): The username of the user.
  - `email` (VARCHAR(100), UNIQUE): User's email address.
  - `password_hash` (VARCHAR(255)): Hashed password for authentication.
  - `created_at` (DATETIME): Timestamp of user creation.
  - `updated_at` (DATETIME): Timestamp of last update.

### 2. Sensors
- **Table Name**: `sensors`
- **Description**: Contains information about the sensors used in the field.
- **Schema**:
  - `id` (INT, PRIMARY KEY, AUTO_INCREMENT): Unique identifier for each sensor.
  - `type` (VARCHAR(50)): Type of the sensor (e.g., temperature, humidity).
  - `location` (VARCHAR(100)): Location where the sensor is deployed.
  - `created_at` (DATETIME): Timestamp of sensor creation.
  - `updated_at` (DATETIME): Timestamp of last update.

### 3. Readings
- **Table Name**: `readings`
- **Description**: Stores sensor reading data.
- **Schema**:
  - `id` (INT, PRIMARY KEY, AUTO_INCREMENT): Unique identifier for each reading.
  - `sensor_id` (INT, FOREIGN KEY to `sensors(id)`): Reference to the corresponding sensor.
  - `value` (FLOAT): The value recorded by the sensor.
  - `timestamp` (DATETIME): When the reading was taken.

### 4. Configurations
- **Table Name**: `configurations`
- **Description**: Holds global configurations for the monitoring system.
- **Schema**:
  - `id` (INT, PRIMARY KEY, AUTO_INCREMENT): Unique identifier for each configuration.
  - `key` (VARCHAR(100), UNIQUE): Configuration key (e.g., threshold values).
  - `value` (VARCHAR(255)): Configuration value.
  - `updated_at` (DATETIME): Timestamp of last update.

## Relationships
- Each user can have multiple sensors linked to their account.
- Each sensor can have multiple readings stored in the `readings` table.
- The `configurations` table is a standalone entity that provides flexibility in system settings.

## Usage
This schema allows for efficient storage and retrieval of data, making it suitable for real-time monitoring and historical data analysis.
