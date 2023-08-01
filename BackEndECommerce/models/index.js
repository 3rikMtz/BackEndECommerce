// Importing models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Setting association between Product and Category
// Products belong to Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // Category ID is the foreign key
});

// Setting association between Category and Product
// Categories can have multiple Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // Using category_id as the foreign key in Product model
});

// Setting association between Product and Tag through ProductTag
// Products can belong to many Tags
Product.belongsToMany(Tag, {
  through: ProductTag, // Using a through model
  foreignKey: 'product_id', // Using product_id as the foreign key
});

// Setting association between Tag and Product through ProductTag
// Tags can belong to many Products
Tag.belongsToMany(Product, {
  through: ProductTag, // Using a through model
  foreignKey: 'tag_id', // Using tag_id as the foreign key
});

// Exporting models for use in other files
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
