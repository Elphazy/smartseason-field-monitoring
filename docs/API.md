# API Documentation

## Overview
This document provides comprehensive details about the API endpoints available for the Smart Season Field Monitoring application. It covers authentication, field management, field updates, field stages, field status, and dashboard endpoints, including request and response examples.

## Authentication
### Endpoint: `/auth/login`
- **Method:** POST
- **Description:** Authenticates a user and returns an access token.
- **Request Example:**  
  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```
- **Response Example:**  
  ```json
  {
    "access_token": "your_access_token",
    "token_type": "Bearer"
  }
  ```

## Field Management
### Endpoint: `/fields`
- **Method:** GET
- **Description:** Retrieves a list of all fields.
- **Response Example:**  
  ```json
  [
    {
      "id": 1,
      "name": "Field A",
      "status": "active"
    },
    {
      "id": 2,
      "name": "Field B",
      "status": "inactive"
    }
  ]
  ```

### Endpoint: `/fields`
- **Method:** POST
- **Description:** Creates a new field.
- **Request Example:**  
  ```json
  {
    "name": "New Field",
    "location": "Location X"
  }
  ```
- **Response Example:**  
  ```json
  {
    "id": 3,
    "name": "New Field",
    "status": "active"
  }
  ```

## Field Updates
### Endpoint: `/fields/{id}`
- **Method:** PATCH
- **Description:** Updates an existing field.
- **Request Example:**  
  ```json
  {
    "status": "inactive"
  }
  ```
- **Response Example:**  
  ```json
  {
    "id": 1,
    "name": "Field A",
    "status": "inactive"
  }
  ```

## Field Stages
### Endpoint: `/fields/{id}/stages`
- **Method:** GET
- **Description:** Retrieves stages for a specific field.
- **Response Example:**  
  ```json
  [
    {
      "stage": "Planting",
      "status": "completed"
    },
    {
      "stage": "Harvesting",
      "status": "pending"
    }
  ]
  ```

## Field Status
### Endpoint: `/fields/{id}/status`
- **Method:** GET
- **Description:** Retrieves status information for a specific field.
- **Response Example:**  
  ```json
  {
    "field_id": 1,
    "current_status": "growing",
    "last_updated": "2026-04-20T15:20:00Z"
  }
  ```

## Dashboard Endpoints
### Endpoint: `/dashboard`
- **Method:** GET
- **Description:** Retrieves overall statistics and metrics for fields.
- **Response Example:**  
  ```json
  {
    "total_fields": 10,
    "active_fields": 7,
    "inactive_fields": 3
  }
  ```

## Conclusion
This document serves as a guide to the available API endpoints. Ensure to handle authentication securely and follow best practices for API consumption.