// backend/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes for user-related operations

// Create a new user
router.post('/users', userController.createUser);

// Retrieve a user by ID
router.get('/users/:id', userController.getUserById);

// Update a user's information
router.put('/users/:id', userController.updateUser);

// Delete a user
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
