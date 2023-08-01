// Import Sequelize library
const { Model, DataTypes } = require('sequelize');

// Import database connection from config.js
const sequelize = require('../config/connection');

// Import Product and Tag Models
const Product = require('./Product');
const Tag = require('./Tag');

// Extend Sequelize's Model class to create ProductTag model
class ProductTag extends Model {}

// Define fields and rules for ProductTag model
ProductTag.init(
  {
    // Define ID field
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define product_id field with reference to Product model
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'id',
      },
    },
    // Define tag_id field with reference to Tag model
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Tag,
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
    modelName: 'product_tag',
  }
);

// Export ProductTag model
module.exports = ProductTag;
