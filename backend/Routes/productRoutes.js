import express from 'express';
const router = express.Router();
import {
  deleteProduct,
  getAllProducts,
  updateProduct,
  createProduct,
} from '../Controllers/productController.js';
router.get('/', getAllProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
