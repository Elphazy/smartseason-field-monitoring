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