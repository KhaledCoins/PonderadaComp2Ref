const Joi = require('joi');

const baseFields = {
  task_id: Joi.string().uuid(),
  start_time: Joi.date().iso(),
  end_time: Joi.date().iso().greater(Joi.ref('start_time')),
  notes: Joi.string().allow(null, ''),
};

const createAgendaSchema = Joi.object({
  ...baseFields,
  task_id: baseFields.task_id.required(),
});

const updateAgendaSchema = Joi.object(baseFields);

module.exports = {
  createAgendaSchema,
  updateAgendaSchema,
}; 