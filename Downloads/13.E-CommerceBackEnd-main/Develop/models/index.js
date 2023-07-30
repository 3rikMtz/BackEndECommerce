// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
//Set the association between Product and Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
}); 
// Categories have many Products
//the foreign key is set to the category_id in the Product model 
Category.hasMany(Product, {
  foreignKey: 'category_id',
}); 
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
}); 
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id', 
}); 

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
