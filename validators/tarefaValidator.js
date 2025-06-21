const Joi = require('joi');

const baseFields = {
  title: Joi.string().max(200),
  description: Joi.string().allow(null, ''),
  status: Joi.string().valid('pendente', 'em andamento', 'concluida').allow(null, ''),
  desired_date: Joi.date().iso().allow(null, ''),
  deadline: Joi.date().iso().allow(null, ''),
  importance: Joi.number().integer().min(0).allow(null, ''),
  progress: Joi.number().integer().min(0).max(100).allow(null, ''),
  user_id: Joi.string().uuid().allow(null, ''),
  category_id: Joi.string().uuid().allow(null, ''),
  origin_id: Joi.string().uuid().allow(null, ''),
};

const createTarefaSchema = Joi.object({
  ...baseFields,
  title: baseFields.title.required(),
});

const updateTarefaSchema = Joi.object(baseFields);

module.exports = {
  createTarefaSchema,
  updateTarefaSchema,
}; 