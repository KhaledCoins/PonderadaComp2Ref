const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');

router.get('/', TaskController.index);
router.post('/', TaskController.create);
router.get('/:id/edit', TaskController.edit);
router.post('/:id', TaskController.update);
router.delete('/:id', TaskController.delete);

module.exports = router; 