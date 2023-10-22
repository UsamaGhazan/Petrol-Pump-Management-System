import express from 'express';
const router = express.Router();
import {
  getAllProducts,
  updateProduct,
} from '../Controllers/productController.js';
router.get('/', getAllProducts);
router.put('/:id', updateProduct);

export default router;
