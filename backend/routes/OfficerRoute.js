import express from 'express';
import OfficerController from '../controller/OfficerController.js';

const router = express.Router();

// Create a new user
router.post('/officer', OfficerController.createOfficer);

//login
router.post('/officerLogin', OfficerController.officerLogin);

// Get all users
// router.get('/officer', UserController.getAllUsers);

// // Get user by ID
// router.get('/officer/:id', UserController.getUserById);

// // Update user by ID
// router.put('/officer/:id', UserController.updateUser);

// // Delete user by ID
// router.delete('/officer/:id', UserController.deleteUser);

export default router;
