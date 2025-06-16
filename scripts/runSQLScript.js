const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

const runSQLScript = async () => {
  const initPath = path.join(__dirname, 'init.sql');
  const seedsPath = path.join(__dirname, 'seeds.sql');
  const initSql = fs.readFileSync(initPath, 'utf8');
  const seedsSql = fs.readFileSync(seedsPath, 'utf8');

  try {
    await pool.query(initSql);
    await pool.query(seedsSql);
    console.log('Scripts SQL (init + seeds) executados com sucesso!');
  } catch (err) {
    console.error('Erro ao executar os scripts SQL:', err);
  } finally {
    await pool.end();
  }
};

runSQLScript();
