import express from 'express';
const router = express.Router();
import {
  getAllEmployees,
  deleteEmployee,
  createEmployee,
} from '../Controllers/adminController.js';
router.get('/', getAllEmployees);
router.post('/', createEmployee);
router.delete('/:id', deleteEmployee);

export default router;
