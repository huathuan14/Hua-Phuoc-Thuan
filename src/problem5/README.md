# Project Documentation

## Environment Setup

### Direct via NPM

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create a `.env` file:**
   Copy the `.env.example` to `.env` and fill in the required environment variables.

### Using Docker Compose

1. **Modify the `.env.docker` file:**
   Copy the `.env.example` to `.env.docker` and fill in the required environment variables.

2. **Build the application:**
   ```bash
   docker-compose build
   ```

## Running the Application

### Direct via NPM

1. **Start the application:**
   ```bash
   npm run dev
   ```

### Using Docker Compose

1. **Start the application:**
   ```bash
   docker-compose up
   ```

## API Documentation

### Authentication

- **POST /auth/login**
  - Request body:
    ```json
    {
      "email": "user@example.com",
      "password": "yourpassword"
    }
    ```
  - Response:
    ```json
    {
      "token": "your_jwt_token"
    }
    ```

- **POST /auth/signUp**
  - Request body:
    ```json
    {
      "name": "User Name",
      "email": "user@example.com",
      "password": "yourpassword"
    }
    ```
  - Response:
    ```json
    {
      "id": 1,
      "name": "User Name",
      "email": "user@example.com"
    }
    ```

### Achievements

- **GET /achievements**
  - Description: Get all achievements for the authenticated user.
  - Response:
    ```json
    [
      {
        "id": 1,
        "title": "Achievement Title",
        "description": "Achievement Description"
      }
    ]
    ```

- **POST /achievements**
  - Request body:
    ```json
    {
      "title": "Achievement Title",
      "description": "Achievement Description"
    }
    ```
  - Response:
    ```json
    {
      "id": 1,
      "title": "Achievement Title",
      "description": "Achievement Description"
    }
    ```

- **PUT /achievements/:id**
  - Request body:
    ```json
    {
      "title": "Updated Title",
      "description": "Updated Description"
    }
    ```
  - Response:
    ```json
    {
      "id": 1,
      "title": "Updated Title",
      "description": "Updated Description"
    }
    ```

- **DELETE /achievements/:id**
  - Description: Delete an achievement by ID.
  - Response: No content (204).

- **GET /achievements/:id**
  - Description: Get a specific achievement by ID.
  - Response:
    ```json
    {
      "id": 1,
      "title": "Achievement Title",
      "description": "Achievement Description"
    }
    ```

## Notes

- Ensure that the database is running and accessible based on the configurations in the `.env` file.
- Use Postman or any API client to test the endpoints.