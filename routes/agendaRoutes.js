const express = require('express');
const router = express.Router();
const AgendaController = require('../controllers/AgendaController');
const validate = require('../middlewares/validate');
const { createAgendaSchema, updateAgendaSchema } = require('../validators/agendaValidator');

router.post('/', validate(createAgendaSchema), AgendaController.criarAgenda);
router.get('/', AgendaController.listarAgendas);
router.put('/:id', validate(updateAgendaSchema), AgendaController.editarAgenda);
router.delete('/:id', AgendaController.excluirAgenda);

module.exports = router; 