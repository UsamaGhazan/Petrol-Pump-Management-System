import express from 'express';
const router = express.Router();
import {
  authUser,
  updateEmployeeProfile,
  addNewStock,
} from '../Controllers/employeeController.js';
import { protect } from '../middleware/authMiddleware.js';
router.post('/login', authUser);

router.put('/profile', protect, updateEmployeeProfile);
router.post('/addNewStock', protect, addNewStock);

export default router;
