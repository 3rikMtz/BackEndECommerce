# E-Commerce Back-End [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


This is the back-end component of an e-commerce application. It provides the server-side functionality for managing products, categories, and tags. The API is built using Node.js, Express.js, and Sequelize ORM.

## Table of Contents

- [Built With](#built-with)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Credits](#credits)
- [License](#license)
- [Demo](#demo)

## Built With: 

* [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
* [![Node.js](https://img.shields.io/badge/Node.js-v14.17.0-green.svg)](https://nodejs.org/)
* [![Express](https://img.shields.io/badge/Express-v4.17.1-blue.svg)](https://expressjs.com/)
* [![Sequelize](https://img.shields.io/badge/Sequelize-v6.6.5-orange.svg)](https://sequelize.org/)
* [![MySQL](https://img.shields.io/badge/MySQL-v8.0-blue.svg)](https://www.mysql.com/)
* [![Insomnia](https://img.shields.io/badge/Insomnia-v2021.5.3-purple.svg)](https://insomnia.rest/)


## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies
4. Set up the database.
- Create a `.env` file in the root directory and provide your database credentials. 
5. Seed the database with sample data.

## Usage

1. Start the server.

2. Once the server is running, you can access the API at `http://localhost:3001`.

## API Routes

The following routes are available in the API:

- `GET /api/categories`: Get all categories.
- `GET /api/categories/:id`: Get a category by ID.
- `POST /api/categories`: Create a new category.
- `PUT /api/categories/:id`: Update a category by ID.
- `DELETE /api/categories/:id`: Delete a category by ID.

- `GET /api/products`: Get all products.
- `GET /api/products/:id`: Get a product by ID.
- `POST /api/products`: Create a new product.
- `PUT /api/products/:id`: Update a product by ID.
- `DELETE /api/products/:id`: Delete a product by ID.

- `GET /api/tags`: Get all tags.
- `GET /api/tags/:id`: Get a tag by ID.
- `POST /api/tags`: Create a new tag.
- `PUT /api/tags/:id`: Update a tag by ID.
- `DELETE /api/tags/:id`: Delete a tag by ID.

Please refer to the API documentation for detailed information about each route, including request and response formats.

## Credits

In order to complete this challenge, I applied the knowledge seen in class, as well as additional resources from the Internet, such as articles and videos. The starter code that served as a helpful foundation for this project was obtained from: https://github.com/coding-boot-camp/fantastic-umbrella 

- https://www.w3schools.com/sql/
- https://www.mysql.com
- https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
- https://www.npmjs.com/package/sequelize
- https://sequelize.org/docs/v6/core-concepts/model-instances/
- https://levelup.gitconnected.com/database-seeding-in-node-js-2b2eec5bfaa1
- https://levelup.gitconnected.com/build-an-express-api-with-sequelize-cli-and-express-router-963b6e274561


## License

This project is licensed under the [MIT License](LICENSE).

## Demo

https://drive.google.com/file/d/152hhMijGebcoPUsm2YIJyi2Ucq39NhmT/view






