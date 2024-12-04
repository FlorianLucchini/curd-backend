import express from 'express';
import { getUsers, createUser, loginUser, getUserById, updateUser, deleteUser } from '../controllers/userController.js';
import { validateUser, validateLogin } from '../middlewares/validationMiddleware.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', validateUser, createUser);
router.post('/login', validateLogin, loginUser);
router.get('/', authMiddleware, getUsers);
router.get('/:id', authMiddleware, getUserById);
router.put('/:id', authMiddleware, updateUser);
router.delete('/:id', authMiddleware, deleteUser);
export default router;