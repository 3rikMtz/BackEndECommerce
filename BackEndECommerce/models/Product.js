// Import Sequelize library
const { Model, DataTypes } = require('sequelize');

// Import database connection from config.js
const sequelize = require('../config/connection');

// Import Category Model
const Category = require('./Category');

// Extend Sequelize's Model class to create Product model
class Product extends Model {}

// Define fields and rules for Product model
Product.init(
  {
    // Define ID field
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define product_name field
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define price field with validation
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    // Define stock field with default value and validation
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    // Define category_id field with reference to Category model
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: 'id',
      },
    },
  },
  {
    // Set sequelize configuration
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

// Export Product model
module.exports = Product;
