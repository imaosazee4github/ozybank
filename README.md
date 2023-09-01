# Bank Account Management API


This is a simple RESTful API for managing bank accounts. The API allows you to create bank accounts, fetch account details using account numbers, and retrieve a list of all bank accounts.

## Getting Started
- Run `npm start` to start the application using Node.js
- Run `npm dev` to start the application using Nodemon

### Create a Bank Account

**Endpoint:** `POST /create`
**Payload:** JSON object with account details
**Response:** JSON object with account information and a unique account number

### Resolve a Bank Account

**Endpoint:** `GET /resolve/:accountNumber`
**Response:** JSON object with account details

### Fetch All Bank Accounts

**Endpoint:** `GET /fetchAll`
**Response:** Array of JSON objects with account details

## Dependencies
- Express.js
