import express from 'express';
const router = express.Router();
import {
  getAllEmployees,
  deleteEmployee,
  createEmployee,
  updateEmployee,
  getEmployeeById,
} from '../Controllers/adminController.js';
router.get('/', getAllEmployees);
router.post('/', createEmployee);
router.delete('/:id', deleteEmployee);
router.put('/:id', updateEmployee);
router.get('/:id', getEmployeeById);

export default router;
