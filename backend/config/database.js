// backend/config/database.js

const Sequelize = require('sequelize');

// Initialize Sequelize with database credentials
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres', // Specify the dialect of the database (in our case, PostgreSQL)
});

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
