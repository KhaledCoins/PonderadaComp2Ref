const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/TarefaController');
const validate = require('../middlewares/validate');
const { createTarefaSchema, updateTarefaSchema } = require('../validators/tarefaValidator');

// Rotas para o CRUD de tarefas
router.post('/', validate(createTarefaSchema), TarefaController.criarTarefa);
router.get('/', TarefaController.listarTarefas);
router.get('/:id', TarefaController.obterTarefa);
router.put('/:id', validate(updateTarefaSchema), TarefaController.editarTarefa);
router.delete('/:id', TarefaController.excluirTarefa);

module.exports = router; 