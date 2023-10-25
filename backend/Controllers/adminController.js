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

const createEmployee = asyncHandler(async (req, res) => {
  const { isAdmin, name, email, employed, role } = req.body;
  const employee = new Employee({
    isAdmin,
    name,
    email,
    employed,
    role,
  });

  const createdEmployee = await employee.save();
  res.status(201).json(createdEmployee);
});

export { getAllEmployees, deleteEmployee, createEmployee };
