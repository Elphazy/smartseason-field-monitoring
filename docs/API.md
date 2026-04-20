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
```

### Example 2: Get Fields
```javascript
fetch('/api/fields', {
  headers: { 'Authorization': 'Bearer your_access_token' }
}).then(response => response.json()).then(data => {
  console.log(data);
});
```

---

## Conclusion
This documentation provides an initial overview of the SmartSeason API. For more details, please refer to specific endpoint documentation while developing applications.