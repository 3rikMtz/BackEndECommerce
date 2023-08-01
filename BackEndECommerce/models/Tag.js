// Import Sequelize library
const { Model, DataTypes } = require('sequelize');

// Import database connection from config.js
const sequelize = require('../config/connection.js');

// Extend Sequelize's Model class to create Tag model
class Tag extends Model {}

// Define fields and rules for Tag model
Tag.init(
  {
    // Define ID field
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define tag_name field
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Set sequelize configuration
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// Export Tag model
module.exports = Tag;
