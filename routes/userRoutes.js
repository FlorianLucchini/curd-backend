import express from 'express';
import { getUsers, createUser, loginUser, getUserById, updateUser, deleteUser } from '../controllers/userController.js';
import { validateUser, validateLogin, checkRole } from '../middlewares/validationMiddleware.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', validateUser, createUser);
router.post('/login', validateLogin, loginUser);

router.post(
  '/admin/users',
  authMiddleware,
  checkRole('admin'),
  validateUser,
  createUser
);

router.put(
  '/admin/users/:id',
  authMiddleware,
  checkRole('admin'),
  updateUser
);

router.delete(
  '/admin/users/:id',
  authMiddleware,
  checkRole('admin'),
  deleteUser
);

router.get(
    '/admin/users',
    authMiddleware,
    checkRole('admin'),
    getUsers
);


router.get('/profile/:id', authMiddleware, getUserById);
router.put('/profile/:id', authMiddleware, updateUser);

export default router;