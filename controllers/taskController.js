const Task = require('../models/Task');

class TaskController {
    static async index(req, res) {
        try {
            const tasks = await Task.findAll();
            res.render('tasks/index', { tasks });
        } catch (error) {
            console.error('Erro ao carregar tarefas:', error);
            res.status(500).render('error', { error: 'Erro ao carregar tarefas' });
        }
    }

    static async create(req, res) {
        try {
            const { title, description, deadline, status } = req.body;
            await Task.create({ title, description, deadline, status });
            res.redirect('/tasks');
        } catch (error) {
            console.error('Erro ao criar tarefa:', error);
            res.status(500).render('error', { error: 'Erro ao criar tarefa' });
        }
    }

    static async edit(req, res) {
        try {
            const task = await Task.findById(req.params.id);
            if (!task) {
                return res.status(404).render('error', { error: 'Tarefa não encontrada' });
            }
            res.render('tasks/edit', { task });
        } catch (error) {
            console.error('Erro ao carregar tarefa:', error);
            res.status(500).render('error', { error: 'Erro ao carregar tarefa' });
        }
    }

    static async update(req, res) {
        try {
            const { title, description, deadline, status } = req.body;
            await Task.update(req.params.id, { title, description, deadline, status });
            res.redirect('/tasks');
        } catch (error) {
            console.error('Erro ao atualizar tarefa:', error);
            res.status(500).render('error', { error: 'Erro ao atualizar tarefa' });
        }
    }

    static async delete(req, res) {
        try {
            await Task.delete(req.params.id);
            res.redirect('/tasks');
        } catch (error) {
            console.error('Erro ao deletar tarefa:', error);
            res.status(500).render('error', { error: 'Erro ao deletar tarefa' });
        }
    }
}

module.exports = TaskController; 