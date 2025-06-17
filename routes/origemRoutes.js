const express = require('express');
const router = express.Router();
const OrigemController = require('../controllers/OrigemController');
const validate = require('../middlewares/validate');
const { createOrigemSchema, updateOrigemSchema } = require('../validators/origemValidator');

router.post('/', validate(createOrigemSchema), OrigemController.criarOrigem);
router.get('/', OrigemController.listarOrigens);
router.put('/:id', validate(updateOrigemSchema), OrigemController.editarOrigem);
router.delete('/:id', OrigemController.excluirOrigem);

module.exports = router; 