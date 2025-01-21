# API Specification (Scores Module)

## Overview

This API specification details the implementation of a real-time scoreboard system. The system manages user scores, ensures secure updates, and provides a live scoreboard displaying the top 10 users.

---

### 1. Action Finish
**Endpoint:** `POST /api/action-finish`

**Description:** Updates the user's score automatically when the action is completed.

**Headers:**
- `Authorization`: Bearer `<JWT>`

**Request:**
```json
{
  "action_id": "string"
}
```
- **Parameters:**
  - `action_id` (string): Identifier for the completed action.

**Response:**
- **Success (200 OK):**
  ```json
  {
    "status": "success",
    "message": "Action has been finished successfully",
    "call_date": "2025-01-15T14:30:00Z",
    "response_date": "2025-01-15T14:30:05Z",
    "data": {
      "new_score": "integer"
    }
  }
  ```
- **Error:**
  - **401 Unauthorized:**
    ```json
    {
      "status": "error",
      "message": "Invalid authentication token.",
      "call_date": "2025-01-15T14:30:00Z",
      "response_date": "2025-01-15T14:30:05Z"
    }
    ```
  - **400 Bad Request:**
    ```json
    {
      "status": "error",
      "message": "Invalid or missing parameters.",
      "call_date": "2025-01-15T14:30:00Z",
      "response_date": "2025-01-15T14:30:05Z"
    }
    ```
  - **500 Internal Server Error:**
    ```json
    {
      "status": "error",
      "message": "Failed to finish this action.",
      "call_date": "2025-01-15T14:30:00Z",
      "response_date": "2025-01-15T14:30:05Z"
    }
    ```

---

### 2. Fetch Top Scores
**Endpoint:** `GET /api/top-scores`

**Description:** Retrieves the top 10 users and their scores for the scoreboard.

**Headers:**
- `Authorization`: Bearer `<JWT>`

**Response:**
- **Success (200 OK):**
  ```json
  {
    "status": "success",
    "message": "Top scores retrieved successfully",
    "call_date": "2025-01-15T14:30:00Z",
    "response_date": "2025-01-15T14:30:05Z",
    "data": {
      "top_scores": [
        { "user_id": "string", "score": "integer" },
        { "user_id": "string", "score": "integer" },
        ...
      ]
    }
  }
  ```
- **Error:**
  - **401 Unauthorized:**
    ```json
    {
      "status": "error",
      "message": "Invalid authentication token.",
      "call_date": "2025-01-15T14:30:00Z",
      "response_date": "2025-01-15T14:30:05Z"
    }
    ```
  - **500 Internal Server Error:**
    ```json
    {
      "status": "error",
      "message": "Failed to retrieve top scores.",
      "call_date": "2025-01-15T14:30:00Z",
      "response_date": "2025-01-15T14:30:05Z"
    }
    ```

---

### Security Measures

1. **Authentication:**
   - Use JWT (JSON Web Tokens) for authentication.

2. **Action Validation:**
   - Ensure each `action_id` is unique and can only be used once (prevents replay attacks).

3. **Encryption:**
   - Use HTTPS to secure data in transit.

4. **Rate Limiting:**
   - Limit the number of requests a user can make in a given time frame.

5. **Logging and Monitoring:**
   - Log all API requests and responses to monitor for suspicious activities.

---

### Real-Time Scoreboard Updates

**Approach:**
- Implement WebSocket connections to enable real-time updates.
- Clients subscribe to updates via a WebSocket endpoint (`wss://<server>/live-scoreboard`).
- Server pushes updates to connected clients when a user's score changes or the leaderboard is updated.

---

### Scalability and Monitoring

1. **Scalability:**
   - Use a distributed database system to handle large user bases.
   - Employ load balancers to distribute traffic across multiple servers.

2. **Monitoring:**
   - Log all API requests and responses.
   - Monitor logs for suspicious activities and performance metrics.

---

### Error Codes
| Code | Message                      | Description                                |
|------|------------------------------|--------------------------------------------|
| 200  | success                      | Request processed successfully.           |
| 400  | error: Invalid parameters    | Missing or invalid parameters in request. |
| 401  | error: Unauthorized          | Authentication failed.                    |
| 500  | error: Internal Server Error | Unexpected server-side error.             |

---
