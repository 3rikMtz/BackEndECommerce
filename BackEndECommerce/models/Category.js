// Importing required modules from 'sequelize'
const { Model, DataTypes } = require('sequelize');

// Importing the configured instance of Sequelize
const sequelize = require('../config/connection');

// Defining Category class by extending Model class from sequelize
class Category extends Model {}

// Initializing Category model by invoking 'init' method inherited from Model class
Category.init(
  {
    // Define the fields of the Category model
    id: {
      type: DataTypes.INTEGER, // Specifying the data type of 'id' field
      allowNull: false, // 'id' field cannot be null
      primaryKey: true, // 'id' field is the primary key
      autoIncrement: true // 'id' field value auto increments
    },
    category_name: {
      type: DataTypes.STRING, // Specifying the data type of 'category_name' field
      allowNull: false // 'category_name' field cannot be null
    }
  },
  {
    // Configuring the model
    sequelize, // Pass the imported sequelize instance
    timestamps: false, // Not using sequelize auto created timestamp fields
    freezeTableName: true, // Prevent sequelize from pluralizing the model name
    underscored: true, // Enable attribute names with underscore instead of camelCase
    modelName: 'category', // Setting the name of the model
  }
);

// Exporting Category model for use in other files
module.exports = Category;
