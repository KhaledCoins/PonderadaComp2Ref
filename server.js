require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/db');
const path = require('path');

// View engine setup (MVC)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para parsing do body - deve vir antes das rotas
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.connect()
  .then(() => {
    console.log('Conectado ao banco de dados PostgreSQL');

    const userRoutes = require('./routes/userRoutes');
    app.use('/api/users', userRoutes);

    // Remove unused static serve to public (folder will be removed)

    // Frontend routes (EJS views)
    const frontRoutes = require('./routes/frontRoutes');
    app.use('/', frontRoutes);

    const tarefaRoutes = require('./routes/tarefaRoutes');
    app.use('/api/tarefas', tarefaRoutes);

    const categoriaRoutes = require('./routes/categoriaRoutes');
    app.use('/api/categorias', categoriaRoutes);

    const origemRoutes = require('./routes/origemRoutes');
    app.use('/api/origens', origemRoutes);

    const agendaRoutes = require('./routes/agendaRoutes');
    app.use('/api/agendas', agendaRoutes);

    // Middleware para lidar com erros de rota não encontrada
    app.use((req, res, next) => {
      res.status(404).send('Página não encontrada');
    });

    // Middleware para lidar com erros internos do servidor
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Erro no servidor');
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });
