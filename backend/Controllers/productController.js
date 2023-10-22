import asyncHandler from 'express-async-handler';
import Product from '../Models/productsModel.js';
const getAllProducts = asyncHandler(async (req, res) => {
  console.log('getallproducts');
  const products = await Product.find({});
  res.json(products);
});

export { getAllProducts };
