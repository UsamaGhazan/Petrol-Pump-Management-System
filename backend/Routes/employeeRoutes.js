import express from 'express';
const router = express.Router();
import { authUser } from '../Controllers/employeeController.js';
router.post('/login', authUser);

export default router;
