import mongoose from 'mongoose';

const employeeSchema = mongoose.Schema({
  isAdmin: { type: Boolean, default: false },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  employed: { type: Date },
  role: { type: String, required: true },
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
