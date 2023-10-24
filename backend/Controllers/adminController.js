import asyncHandler from 'express-async-handler';
import Product from '../Models/productsModel.js';
import Employee from '../Models/employeeModel.js';
import generateToken from '../utils/generateToken.js';

const getAllEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find({});
  res.json(employees);
});

const deleteEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  if (employee) {
    await employee.deleteOne();
    res.json({ message: 'Employee removed' });
  } else {
    res.status(404);
    throw new Error('Employee not found');
  }
});

export { getAllEmployees, deleteEmployee };
