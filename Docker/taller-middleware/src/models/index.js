const { Sequelize } = require('sequelize');
const Product = require('./Product');
const Order = require('./Order');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
);

// Definición de relaciones
Product.hasMany(Order, { foreignKey: 'productId' });
Order.belongsTo(Product, { foreignKey: 'productId' });

module.exports = { sequelize, Product, Order };