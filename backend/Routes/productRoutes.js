import express from 'express';
const router = express.Router();
import {
  deleteProduct,
  getAllProducts,
  updateProduct,
} from '../Controllers/productController.js';
router.get('/', getAllProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
