const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {
  validateUniqueField,
} = require('../middleware/validateUserRegistration');
const { SALT_WORK_FACTOR } = require('../config');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is a required field.'],
  },
  password: {
    type: String,
    required: [true, 'Password is a required field.'],
    minLength: [8, 'Password must be atleast 8 characters long.'],
  },
  firstName: {
    type: String,
    required: [true, 'First name is a required field.'],
  },
  lastName: { type: String },
});

userSchema.path('email').validate({
  validator: validateUniqueField('email', 'User'),
  message: '{VALUE} already exists',
  type: 'unique',
});

userSchema.post('validate', async (user, next) => {
  if (!user.isModified('password')) return next();
  const salt = await bcrypt.genSalt(Number(SALT_WORK_FACTOR));
  user.password = await bcrypt.hash(user.password, salt);
  return next();
});

/**
 * DO NOT MOVE
 * .model() must be called after adding everything to schema, including hooks
 */
const User = mongoose.model('User', userSchema);

module.exports = { User, userSchema };