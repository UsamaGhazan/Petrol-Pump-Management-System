import express from 'express';
const router = express.Router();
import { getAllEmployees } from '../Controllers/employeeController.js';
router.get('/', getAllEmployees);

export default router;
