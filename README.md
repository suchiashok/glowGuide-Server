## Glow Guide Server Repository

This repository contains the server-side code for the Glow Guide application, including a database for all skincare products and user collections. The server fetches data from the database and provides a custom API with various endpoints, all accessing a MySQL database to retrieve the required information.

## Introduction

The Glow Guide server manages data for skincare products and user collections, providing a comprehensive API to interact with this data. This server is built using Node.js and Express, with a MySQL database for storage and Knex.js as the query builder.

## Tech Stack 

- Node.js
- Express.js
- MySQL
- Knex.js

## Setup and Installation 

1. **Clone the Repository**

   ```bash
   git clone https://github.com/suchiashok/glowGuide-Server.git
   cd glowGuide-Server

2. **Install Dependencies 
    ```bash
    npm install

3. **Configure environment variables 
Create a .env file in the root directory and add your database configuration and other environment variables:
    ```env
    DB_HOST=your-database-host
    DB_USER=your-database-username
    DB_PASS=your-database-password
    DB_NAME=your-database-name
