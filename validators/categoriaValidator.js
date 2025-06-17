const Joi = require('joi');

const baseFields = {
  name: Joi.string().max(100),
  priority: Joi.number().integer().min(0).allow(null),
};

const createCategoriaSchema = Joi.object({
  name: baseFields.name.required(),
  priority: baseFields.priority,
});

const updateCategoriaSchema = Joi.object(baseFields);

module.exports = {
  createCategoriaSchema,
  updateCategoriaSchema,
}; 