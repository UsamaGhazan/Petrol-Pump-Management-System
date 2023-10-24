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

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.deleteOne();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    previousStock: 0,
    newStock: 0,
    sale: 0,
    remainingBalance: 0,
    price: 0,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

export { getAllProducts, updateProduct, deleteProduct, createProduct };
