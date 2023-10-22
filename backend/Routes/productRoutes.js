import express from 'express';
const router = express.Router();
import { getAllProducts } from '../Controllers/productController.js';
router.get('/', getAllProducts);

export default router;
