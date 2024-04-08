import express from 'express';
import UserController from '../controller/UserController.js';

const router = express.Router();

// Create a new user
router.post('/users', UserController.createUser);

// Create a new user
router.post('/userLogin', UserController.userLogin);

// Get all users
router.get('/users', UserController.getAllUsers);

// Get user by ID
router.get('/users/:id', UserController.getUserById);

// Update user by ID
router.put('/users/:id', UserController.updateUser);

// Delete user by ID
router.delete('/users/:id', UserController.deleteUser); 

export default router;
