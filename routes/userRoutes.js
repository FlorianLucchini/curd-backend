import express from 'express';
import { getUsers, createUser, getUserById, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

// Rutas
router.get('/', getUsers); // Obtain all users
router.post('/', createUser); // Create a new user
router.get('/:id', getUserById); // Obtain a user by ID
router.put('/:id', updateUser); // Update a user by ID
router.delete('/:id', deleteUser); // Delete a user by ID

export default router;