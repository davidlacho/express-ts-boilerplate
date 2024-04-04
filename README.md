# Express & TypeScript Starter with NeDB

A streamlined starter project for building Express applications using TypeScript, with NeDB for local NoSQL data storage. This setup is designed for rapid development, allowing you to focus on building your application's core features.

## Features

- Express server setup with basic REST API endpoints.
- NeDB integration for local data storage.
- TypeScript for type-safe code.
- Nodemon for automatic server restarts on file changes.

## Prerequisites

Before you start, ensure you have installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- npm (usually comes with Node.js)

## Getting Started

Follow these instructions to get the project up and running on your local machine for development purposes.

### Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**

   Run the following command to install the project dependencies:

   ```bash
   npm install
   ```

3. **Start the development server**

   Use the npm script configured for starting the server in development mode with automatic restarts:

   ```bash
   npm start
   ```

   This will start the server on `http://localhost:3000` and watch for any changes, reloading the server automatically.

## Usage

The project comes with two basic API endpoints to demonstrate adding and retrieving data:

- **POST `/add`**: Adds a new document to the database. The request body should be in JSON format.
- **GET `/all`**: Retrieves all documents from the database.

You can test these endpoints using tools like Postman or curl.

## Extending the Project

To add more functionality to your application:

- Create new routes in the `app.ts` file or in separate modules under the `src` directory.
- Define additional data models and utilize them within your routes for more complex data operations.