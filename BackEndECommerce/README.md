🛍️ E-commerce Back End - Object-Relational Mapping (ORM) Challenge

This is the back end for an e-commerce site built using Express.js API and Sequelize to interact with a MySQL database. The application allows users to manage product categories, products, and tags, as well as perform CRUD operations on the database.

📝 Table of Contents:
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Contributing](#contributing)
- [Questions](#questions)

💻 Installation:
1. Clone the repository to your local machine.
2. Install the required dependencies using the following command:
   ```
   npm install
   ```
3. Set up your environment variables by creating a `.env` file in the root directory of the project and adding the necessary values for `DB_NAME`, `DB_USER`, `DB_PASSWORD`, and other relevant database configuration options.
4. Create the database schema and seed data by running the following commands:
   ```
   mysql -u <username> -p
   source db/schema.sql
   ```
5. Start the server by running the following command:
   ```
   npm start
   ```

🚀 Usage:
Once the server is running, you can use tools like [Insomnia Core](https://insomnia.rest/) or [Postman](https://www.postman.com/) to test the API routes for categories, products, and tags.

API Routes:
- `GET /api/categories`: Get all categories.
- `GET /api/categories/:id`: Get a single category by its ID.
- `POST /api/categories`: Create a new category.
- `PUT /api/categories/:id`: Update a category by its ID.
- `DELETE /api/categories/:id`: Delete a category by its ID.

- `GET /api/products`: Get all products.
- `GET /api/products/:id`: Get a single product by its ID.
- `POST /api/products`: Create a new product.
- `PUT /api/products/:id`: Update a product by its ID.
- `DELETE /api/products/:id`: Delete a product by its ID.

- `GET /api/tags`: Get all tags.
- `GET /api/tags/:id`: Get a single tag by its ID.
- `POST /api/tags`: Create a new tag.
- `PUT /api/tags/:id`: Update a tag by its ID.
- `DELETE /api/tags/:id`: Delete a tag by its ID.

🎥 Demo:
Check out the [Walkthrough Video](https://drive.google.com/file/d/1Ydqy6qXASW85njSBWhui3wbkzS3KL9tv/view) for a demonstration of the application's functionality.

🤝 Contributing:
Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or create a pull request.

📧 Questions:
If you have any questions or need further assistance, feel free to reach out.
- GitHub: [Your GitHub Username](https://github.com/3rikMtz)
- Email: eri0305@hotmail.com

Now you have a concise and clean README with the necessary information, best practices, and a touch of emojis! 🎉