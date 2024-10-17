# Social-Network-API

## Description
This project is a backend API for a social network application built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**. The API allows users to share their thoughts, react to friends' thoughts, and create a friend list. This solution emphasizes CRUD operations, subdocuments (reactions), and the efficient handling of relationships between models.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Walkthrough Video](#walkthrough-video)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation
1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd <your-repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   - Create a `.env` file in the root directory with the following content:
     ```
     MONGODB_URI=mongodb://127.0.0.1:27017/socialnetworkDB
     PORT=3001
     ```

4. Start the server:
   ```bash
   npm start
   ```

## Usage
You can use **Insomnia** to interact with the API. The server should be running on `http://localhost:3001`. Below are the available routes.

## API Routes

### Users
- **GET /api/users**: Get all users.
- **GET /api/users/:id**: Get a single user by ID.
- **POST /api/users**: Create a new user.
- **PUT /api/users/:id**: Update a user by ID.
- **DELETE /api/users/:id**: Delete a user by ID.
- **POST /api/users/:userId/friends/:friendId**: Add a friend.
- **DELETE /api/users/:userId/friends/:friendId**: Remove a friend.

### Thoughts
- **GET /api/thoughts**: Get all thoughts.
- **GET /api/thoughts/:id**: Get a single thought by ID.
- **POST /api/thoughts**: Create a new thought.
- **PUT /api/thoughts/:id**: Update a thought by ID.
- **DELETE /api/thoughts/:id**: Delete a thought by ID.

### Reactions
- **POST /api/thoughts/:thoughtId/reactions**: Add a reaction to a thought.
- **DELETE /api/thoughts/:thoughtId/reactions/:reactionId**: Remove a reaction from a thought.

## Walkthrough Video
A walkthrough video demonstrating the functionality of the API is available [here](https://drive.google.com/file/d/1CXVM6rqAzKiBBHJCfNsbBHGrjWHe6s8d/view).


## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **TypeScript**
- **Insomnia** for API testing

## License
This project is licensed under the MIT License.
