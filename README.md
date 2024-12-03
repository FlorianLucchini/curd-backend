# CRUD Backend

This project is a **RESTful API** built with **Node.js**, **Express**, and **MongoDB** (hosted on MongoDB Atlas). It provides a simple backend for managing **users** with basic **CRUD** (Create, Read, Update, Delete) operations.

## Project Overview

The application allows the management of users, where each user has a name, email, password, and an optional photo. The API exposes the following functionalities:

- **Create a new user**
- **Retrieve all users**
- **Retrieve a specific user by ID**
- **Update an existing user**
- **Delete a user by ID**

The data is stored in a MongoDB database, and operations are handled via **Mongoose**, an ORM for MongoDB.

## Features

### Controllers

- **getUsers**: Fetches all users from the database.
- **createUser**: Allows creating a new user by providing `name`, `email`, `password`, and optionally a `photo` (in base64 format).
- **getUserById**: Retrieves a specific user by their unique ID.
- **updateUser**: Updates a user's information (name, email, password, photo) based on their ID.
- **deleteUser**: Deletes a user from the database by their ID.

### Routes

The following routes are exposed to interact with the users:

- **GET /api/users**: Retrieves all users in the system.
- **POST /api/users**: Creates a new user.
- **GET /api/users/:id**: Fetches a user by their unique ID.
- **PUT /api/users/:id**: Updates a user's data by their ID.
- **DELETE /api/users/:id**: Deletes a user from the database by their ID.

### Error Handling

Each API route includes error handling to manage common issues such as:

- Missing required fields.
- Invalid or malformed input.
- Non-existing user during update or delete requests.
- Database connection errors.

### Data Storage

- **Users**: Each user is stored with a unique ID (generated by MongoDB), along with their name, email, password, and an optional photo (base64 encoded string).
- The data is managed through **Mongoose**, providing an easy-to-use schema and model structure for MongoDB.

## Usage

- **POST** `/api/users`: Add a new user to the system by providing their `name`, `email`, `password`, and an optional `photo`.
- **GET** `/api/users`: Retrieve a list of all users.
- **GET** `/api/users/:id`: Retrieve details of a specific user by their ID.
- **PUT** `/api/users/:id`: Update a user's data.
- **DELETE** `/api/users/:id`: Remove a user from the system.

## License

This project is open-source and available under the MIT License.

For more details, please feel free to explore the repository.