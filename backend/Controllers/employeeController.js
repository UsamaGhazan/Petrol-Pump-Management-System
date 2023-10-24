import asyncHandler from 'express-async-handler';
import Product from '../Models/productsModel.js';
import Employee from '../Models/employeeModel.js';
import generateToken from '../utils/generateToken.js';
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const employee = await Employee.findOne({ email });
  if (employee && password === employee.password) {
    res.json({
      _id: employee._id,
      name: employee.name,
      email: employee.email,

      token: generateToken(employee._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

const getAllEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find({});
  res.json(employees);
});

export { authUser, getAllEmployees };
