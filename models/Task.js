const { Pool } = require('pg');
const pool = new Pool();

class Task {
    static async create({ titulo, descricao, data_limite, status }) {
        const query = `
            INSERT INTO tasks (titulo, descricao, data_limite, status)
            VALUES ($1, $2, $3, $4)
            RETURNING *
        `;
        const values = [titulo, descricao, data_limite, status];
        const result = await pool.query(query, values);
        return result.rows[0];
    }

    static async findAll() {
        const query = 'SELECT * FROM tasks ORDER BY data_limite ASC';
        const result = await pool.query(query);
        return result.rows;
    }

    static async findById(id) {
        const query = 'SELECT * FROM tasks WHERE id = $1';
        const result = await pool.query(query, [id]);
        return result.rows[0];
    }

    static async update(id, { titulo, descricao, data_limite, status }) {
        const query = `
            UPDATE tasks
            SET titulo = $1, descricao = $2, data_limite = $3, status = $4
            WHERE id = $5
            RETURNING *
        `;
        const values = [titulo, descricao, data_limite, status, id];
        const result = await pool.query(query, values);
        return result.rows[0];
    }

    static async delete(id) {
        const query = 'DELETE FROM tasks WHERE id = $1 RETURNING *';
        const result = await pool.query(query, [id]);
        return result.rows[0];
    }
}

module.exports = Task; 