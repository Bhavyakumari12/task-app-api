# Task App API

## Requirements

- Node.js (>= 14.x)
- npm (>= 6.x)
- MongoDB Credentials

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/task-app-api.git
    cd task-app-api
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:

    Note that connection will only be available for 1 week after 03/04/2025
    
    ```env
    PORT=3000
    MONGO_USERNAME=bhavyasha85
    MONGO_PASSWORD=Yb510iR9EOn3noWi
    MONGO_URL=cluster0.mhyiu.mongodb.net
    MONGO_DB=cluster0
    ```

## Running the Application

1. Start the application:
    ```sh
    npm run dev
    ```

2. The API will be available at `http://localhost:3000`.

## Environment Variables

- `PORT`: The port on which the server will run.
- `MONGO_USERNAME`: The username for your MongoDB cloud instance.
- `MONGO_PASSWORD`: The password for your MongoDB cloud instance.
- `MONGO_URL`: The connection string for your MongoDB cloud instance.
- `MONGO_DB`: The database name for your MongoDB cloud instance.

## API Documentation

### Endpoints

#### Task

- **POST /tasks**
  - Description: Create a new task
  - Request Body:
    ```json
    {
      "title": "string",
      "description": "string",
      "status": "string"
    }
    ```
  - Response:
    ```json
    {
      "_id": "string",
      "title": "string",
      "description": "string",
      "status": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
    ```

- **GET /tasks**
  - Description: Get all tasks with optional search and filter options
  - Query Parameters:
    - `search`: to search task titles and descriptions
    - `status`: Filter tasks by status (`to-do`, `in-progress`, `done`)
    - `page`: The page number for pagination (default: 1)
    - `limit`: The number of tasks per page (default: 10)
  - Response:
    ```json
    {
      "tasks": [
        {
          "_id": "string",
          "title": "string",
          "description": "string",
          "status": "string",
          "createdAt": "date",
          "updatedAt": "date"
        }
      ],
      "total": "number",
      "page": "number",
      "pages": "number"
    }
    ```

- **GET /tasks/:id**
  - Description: Get a task by ID
  - Response:
    ```json
    {
      "_id": "string",
      "title": "string",
      "description": "string",
      "status": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
    ```

- **PUT /tasks/:id**
  - Description: Update a task by ID
  - Request Body:
    ```json
    {
      "title": "string",
      "description": "string",
      "status": "string"
    }
    ```
  - Response:
    ```json
    {
      "_id": "string",
      "title": "string",
      "description": "string",
      "status": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
    ```

- **DELETE /tasks/:id**
  - Description: Delete a task by ID
  - Response:
    ```json
    {
      "message": "Task deleted successfully"
    }
    ```


