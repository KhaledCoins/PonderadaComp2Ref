const Joi = require('joi');

const baseFields = {
  name: Joi.string().max(100),
  email: Joi.string().email().max(100),
  password: Joi.string().min(6).max(100),
};

const createUserSchema = Joi.object({
  name: baseFields.name.required(),
  email: baseFields.email.required(),
  password: baseFields.password.required(),
});

const updateUserSchema = Joi.object({
  name: baseFields.name,
  email: baseFields.email,
  password: baseFields.password,
});

module.exports = {
  createUserSchema,
  updateUserSchema,
}; 