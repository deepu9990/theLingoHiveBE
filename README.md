Node.js Express REST API
A production-ready RESTful API built with Node.js, Express, and MongoDB using Mongoose. The project includes features like authentication with JWT, request validation, centralized error handling, and testing.

Getting Started
Installation
git clone https://github.com/<your-org>/<your-repo>.git
cd <your-repo>
yarn install
Environment Setup
Copy the .env.example file and configure your environment:

cp .env.example .env
Update the .env file with your MongoDB URI, JWT secret, and any email/SMTP configuration as needed.

Run the Application
Development
yarn dev
Production
yarn start
API Documentation
Once the server is running, access the Swagger docs at:

http://localhost:<PORT>/v1/docs
Project Structure
src/
├── config/         # App configuration and environment
├── controllers/    # Route logic
├── routes/         # Route definitions
├── services/       # Business logic
├── models/         # Mongoose models
├── validations/    # Joi validation schemas
├── middlewares/    # Express middlewares
├── utils/          # Utility functions and error classes
├── app.js          # Express app initialization
└── index.js        # App entry point
Features
MongoDB integration using Mongoose

JWT-based authentication

Role-based authorization

Request validation using Joi

Centralized error handling

API documentation with Swagger

Winston & Morgan for logging

Jest for testing (unit + integration)

Docker support for containerization

Scripts
yarn dev – Start in development

yarn start – Start in production

yarn test – Run all tests

yarn lint – Run linter

yarn lint:fix – Auto-fix lint issues

yarn prettier – Run Prettier

yarn prettier:fix – Format with Prettier

Testing
yarn test
Authentication
Authenticated routes require a Bearer JWT token in the Authorization header.

Register/Login endpoints return both access and refresh tokens.

Error Handling
All API errors are returned in this format:

{
  "code": 404,
  "message": "Not found"
}
Linting & Formatting
ESLint with Airbnb style guide

Prettier for formatting

Husky and lint-staged for pre-commit checks

License
MIT
