import express from 'express';
const router = express.Router();
import {
  getAllEmployees,
  deleteEmployee,
} from '../Controllers/adminController.js';
router.get('/', getAllEmployees);
router.delete('/:id', deleteEmployee);

export default router;
