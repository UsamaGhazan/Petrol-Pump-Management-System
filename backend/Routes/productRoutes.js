import express from 'express';
const router = express.Router();
import {
  deleteProduct,
  getAllProducts,
  updateProduct,
  createProduct,
  sellProducts,
} from '../Controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';
router.get('/', getAllProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.post('/sellProducts', protect, sellProducts);

export default router;
