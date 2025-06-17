const Joi = require('joi');

const baseFields = {
  name: Joi.string().max(100),
  relevance: Joi.number().integer().min(0).allow(null),
};

const createOrigemSchema = Joi.object({
  name: baseFields.name.required(),
  relevance: baseFields.relevance,
});

const updateOrigemSchema = Joi.object(baseFields);

module.exports = {
  createOrigemSchema,
  updateOrigemSchema,
}; 