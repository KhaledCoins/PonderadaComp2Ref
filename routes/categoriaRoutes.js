const express = require('express');
const router = express.Router();
const CategoriaController = require('../controllers/CategoriaController');
const validate = require('../middlewares/validate');
const { createCategoriaSchema, updateCategoriaSchema } = require('../validators/categoriaValidator');

router.post('/', validate(createCategoriaSchema), CategoriaController.criarCategoria);
router.get('/', CategoriaController.listarCategorias);
router.put('/:id', validate(updateCategoriaSchema), CategoriaController.editarCategoria);
router.delete('/:id', CategoriaController.excluirCategoria);

module.exports = router; 