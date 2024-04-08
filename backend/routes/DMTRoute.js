import express from 'express';
import DmtController from '../controller/DmtController.js';

const router = express.Router();

// Create a new user
router.post('/dmt/create', DmtController.create);
// login
router.post('/dmt/login', DmtController.login);

// // Get all users
// router.get('/dmt', UserController.getAllUsers);

// // Get user by ID
// router.get('/dmt/:id', UserController.getUserById);

// // Update user by ID
// router.put('/dmt/:id', UserController.updateUser);

// // Delete user by ID
// router.delete('/dmt/:id', UserController.deleteUser);

export default router;
