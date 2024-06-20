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

   ```

2. **Install Dependencies**

   ```bash
   npm install

   ```

3. **Configure environment variables**
   Create a .env file in the root directory and add your database configuration and other environment variables:

   ```env
   DB_HOST=your-database-host
   DB_USER=your-database-username
   DB_PASS=your-database-password
   DB_NAME=your-database-name

   ```

4. **Run Database Migrations**

   ```bash
   npx knex migrate:latest

   ```

5. **Start the Server**
   ```bash
   npm start
   ```

## Database Schema

The database consists of the following tables:

### Products

- `id` (Primary Key)
- `product_name`
- `category`
- `brand`
- `description`
- `size_small`
- `size_medium`
- `size_large`
- `size_standard`
- `brand_link`
- `sephora`
- `created_at`
- `updated_at`

### User_Products

- `id` (Primary Key)
- `product_id` (Foreign Key)
- `open_date`
- `expiration_months`
- `created_at`
- `updated_at`

## API Endpoints

The server provides the following API endpoints:

### Products

- **GET /products**

  - Fetches all skincare products.

  ```json
  [
    {
      "id": 1,
      "product_name": "HydraBoost Water Gel",
      "category": "Moisturizer",
      "brand": "Neutrogena",
      "description": "Lightweight, non-greasy moisturizer that hydrates and smooths skin.",
      "size_small": "50ml",
      "size_medium": "100ml",
      "size_large": "200ml",
      "size_standard": null,
      "brand_link": "https://www.neutrogena.com/",
      "sephora": "https://www.sephora.com/"
    },
    {
      "id": 2,
      "product_name": "Ultra Facial Cream",
      "category": "Moisturizer",
      "brand": "Kiehl's",
      "description": "24-hour daily facial cream for all skin types.",
      "size_small": "30ml",
      "size_medium": "50ml",
      "size_large": "100ml",
      "size_standard": null,
      "brand_link": "https://www.kiehls.com/",
      "sephora": "https://www.sephora.com/"
    }
  ]
  ```

  - **POST /products**
    - Adds a new product.
    ```json
    {
      "id": 3,
      "product_name": "CeraVe Moisturizing Cream",
      "category": "Moisturizer",
      "brand": "CeraVe",
      "description": "Rich, non-greasy, fast-absorbing, and suitable for dry skin.",
      "size_small": "50ml",
      "size_medium": "100ml",
      "size_large": "200ml",
      "size_standard": null,
      "brand_link": "https://www.cerave.com/",
      "sephora": "https://www.sephora.com/"
    }
    ```
  - **GET /products/:productId**
    - Fetches a single product by ID.
    ```json
    {
      "id": 4,
      "product_name": "Tidal Brightening Enzyme Water Cream",
      "brand": "Sunday Riley",
      "category": "Moisturizer",
      "description": "Brightening, refining treatment that delivers intense hydration.",
      "size_small": "30ml",
      "size_medium": "50ml",
      "size_large": "100ml",
      "size_standard": null,
      "brand_link": "https://www.sundayriley.com/",
      "sephora": "https://www.sephora.com/"
    }
    ```
  - **GET /products/category/:category**

    - Fetches products by category (e.g., moisturizer, sunscreen, etc.).

    ```json
    [
      {
        "id": 11,
        "product_name": "UV Clear Broad-Spectrum SPF 46",
        "category": "Sunscreen",
        "brand": "EltaMD",
        "description": "Oil-free sunscreen that calms and protects sensitive skin.",
        "size_small": "1.7oz",
        "size_medium": "3oz",
        "size_large": "4oz",
        "size_standard": null,
        "brand_link": "https://www.eltamd.com/",
        "sephora": "https://www.sephora.com/"
      },
      {
        "id": 12,
        "product_name": "Anthelios Melt-in Milk Sunscreen SPF 100",
        "category": "Sunscreen",
        "brand": "La Roche-Posay",
        "description": "Sunscreen for face and body, sensitive skin formula.",
        "size_small": "3oz",
        "size_medium": "5oz",
        "size_large": "8oz",
        "size_standard": null,
        "brand_link": "https://www.laroche-posay.us/",
        "sephora": "https://www.sephora.com/"
      }
    ]
    ```

### User Products (user's collection)

- **GET /userProducts**
  - Fetches all products belonging to the user.
  ```json
  [
    {
      "id": 20,
      "open_date": "2024-06-12",
      "expiration_months": "4",
      "product_id": 49,
      "product_name": "Shiseido Ultimate Sun Protection Lotion SPF 50+",
      "product_brand": "Shiseido",
      "product_category": "Sunscreen",
      "product_description": "Water-resistant sunscreen with SPF 50+."
    },
    {
      "id": 27,
      "open_date": "2024-06-13",
      "expiration_months": "5",
      "product_id": 23,
      "product_name": "Water Drench Hyaluronic Cloud Cream",
      "product_brand": "Peter Thomas Roth",
      "product_category": "Moisturizer",
      "product_description": "Rich, hydrating cream that reduces the appearance of fine lines and wrinkles."
    }
  ]
  ```
  - **POST /userProducts**
  - Adds a new product belonging to the user.
  ```json
  {
    "product_id": 25,
    "open_date": "2024-06-17",
    "expiration_months": "4"
  }
  ```
- **PATCH /userProducts/:id**
  - Updates a product's open date and expiration months belonging to the user by its ID.
  ```json
  {
    "open_date": "2024-06-19",
    "expiration_months": "9"
  }
  ```
- **DELETE /userProducts/:id**
  - Deletes a product belonging to the user by its ID.
