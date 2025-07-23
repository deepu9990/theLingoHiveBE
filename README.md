# Node.js Express REST API

A production-ready RESTful API built with Node.js, Express, and MongoDB using Mongoose. Includes authentication, validation, error handling, and Swagger documentation.

## Getting Started

### Installation

git clone https://github.com/<your-org>/<your-repo>.git
cd <your-repo>
yarn install

### Environment Setup

cp .env.example .env

### Run the Application

#### Development

yarn dev

#### Production

yarn start

## API Documentation

http://localhost:<PORT>/v1/docs


## Project Structure

src/
├── config/
├── controllers/
├── routes/
├── services/
├── models/
├── validations/
├── middlewares/
├── utils/
├── app.js
└── index.js

## Features

* MongoDB with Mongoose
* JWT Authentication
* Role-based Authorization
* Joi Validation
* Centralized Error Handling
* Swagger API Docs
* Winston & Morgan Logging
* Jest Testing
* Docker Support

## Scripts

yarn dev           # Start in development
yarn start         # Start in production
yarn test          # Run all tests
yarn lint          # Run linter
yarn lint:fix      # Fix lint issues
yarn prettier      # Run Prettier
yarn prettier:fix  # Format code


## Authentication

Routes require Bearer token in `Authorization` header.

## Error Format
{
  "code": 404,
  "message": "Not found"
}

## License

MIT
