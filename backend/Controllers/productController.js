import asyncHandler from 'express-async-handler';
import Product from '../Models/productsModel.js';
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const updateProduct = asyncHandler(async (req, res) => {
  const { id, name, previousStock, newStock, sale, remainingBalance, price } =
    req.body;

  const product = await Product.findById(id);

  if (product) {
    (product.name = name),
      (product.price = price),
      (product.previousStock = previousStock),
      (product.newStock = newStock),
      (product.sale = sale),
      (product.remainingBalance = remainingBalance);

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export { getAllProducts, updateProduct };
