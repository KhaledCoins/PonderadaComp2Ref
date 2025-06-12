const express = require('express');
const router = express.Router();

// Helper to render layout with a given page inside "views/pages"
function renderPage(res, fileName, pageTitle) {
  // The path is resolved relative to views/layout/main.ejs, so we go up one level
  res.render('layout/main', {
    pageTitle,
    content: `../pages/${fileName}`
  });
}

// Página inicial (Usuários)
router.get('/', (req, res) => renderPage(res, 'users', 'Usuários'));

// Página de tarefas
router.get('/tasks', (req, res) => renderPage(res, 'tasks', 'Tarefas'));

// Página de categorias
router.get('/categories', (req, res) => renderPage(res, 'categories', 'Categorias'));

// Página de origens
router.get('/origins', (req, res) => renderPage(res, 'origins', 'Origens'));

// Página de agenda
router.get('/agenda', (req, res) => renderPage(res, 'agenda', 'Agenda'));

// Rota About redireciona para tarefas
router.get('/about', (req, res) => res.redirect('/tasks'));

module.exports = router; 