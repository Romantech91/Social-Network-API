import { Router } from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} from '../../controllers/userController.js';

const router = Router();

router.get('/' , getAllUsers);

router.get('/:id', getUserById);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

// adding/removing friends
router.post('/:userId/friends/:friendId', addFriend);

router.delete('/:userId/friends/:friendId', removeFriend);

export default router;