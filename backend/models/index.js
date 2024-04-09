// backend/models/index.js

const { Sequelize } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize({
  dialect: 'sqlite', // Use the desired database dialect
  storage: './database.sqlite', // Path to the SQLite database file
  logging: false, // Disable logging for production
});

module.exports = sequelize;
