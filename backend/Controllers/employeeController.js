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
      isAdmin: employee.isAdmin,
      password: employee.password,
      token: generateToken(employee._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

const updateEmployeeProfile = asyncHandler(async (req, res) => {
  const user = await Employee.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(StaticRange.NOT_FOUND);
    throw new Error('User not found');
  }
});

export { authUser, updateEmployeeProfile };
