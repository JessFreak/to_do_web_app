# Backend part of TODO web app

The goal of this app is creating the project by these instructions:
Create backend app using ExpressJs library - Setup any type of database: Mongo, Redis, MySQL, Sqlite, or any which you prefer - add 2 endpoints, first one to store and 2nd one to pull your data from backend

## Stack
Project built with Express, Prisma and PostgresSQL.

## Setup

### 1. Install Dependencies:

### `yarn install`
Environment Variables:

### 2. Environment Variables:
Create a .env file in the root directory based on .env.example.
Fill in the necessary environment variables such as database connection details.

### 3. Setup Prisma Schema and Database:
* If the database specified in your .env file does not exist yet, you'll need to create it. 
You can use Prisma's migration tool to initialize your database schema.
### `npx prisma db push`
This command will apply migrations and create the necessary tables in your database based on your Prisma schema.

* Generate Prisma Client:
### `npx prisma generate`
This command will generate Prisma Client based on your updated schema.

### 4. Run the Application:

### `node .`
The server will start running on port 3001 by default. You can modify the port in the .env file if needed.
