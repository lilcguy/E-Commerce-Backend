// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//associations below

// Products belongsTo Category
Product.belongsTo(Category, {onDelete: 'CASCADE'});


// Categories have many Products
Category.hasMany(Product, {onDelete: 'CASCADE'});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {through: 'ProductTag', onDelete: 'CASCADE'});


// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through: 'ProductTag', onDelete: 'CASCADE'});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
