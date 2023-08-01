// Importing required packages and modules
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

// Set up an Express application instance
const app = express();

// Set up the application port
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Assigning routes to our Express application
app.use(routes);

// Establish Sequelize connection and sync the database
// The 'force: false' option prevents Sequelize from dropping tables on startup
sequelize.sync({ force: false }).then(() => {
  // If the sync is successful, start the server and listen on the assigned port
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});

