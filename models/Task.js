const { Pool } = require('pg');
const pool = new Pool();

class Task {
    static async create({ title, description, deadline, status }) {
        const query = `
            INSERT INTO tasks (title, description, deadline, status)
            VALUES ($1, $2, $3, $4)
            RETURNING *
        `;
        const values = [title, description, deadline, status];
        const result = await pool.query(query, values);
        return result.rows[0];
    }

    static async findAll() {
        const query = 'SELECT * FROM tasks ORDER BY deadline ASC';
        const result = await pool.query(query);
        return result.rows;
    }

    static async findById(id) {
        const query = 'SELECT * FROM tasks WHERE id = $1';
        const result = await pool.query(query, [id]);
        return result.rows[0];
    }

    static async update(id, { title, description, deadline, status }) {
        const query = `
            UPDATE tasks
            SET title = $1, description = $2, deadline = $3, status = $4
            WHERE id = $5
            RETURNING *
        `;
        const values = [title, description, deadline, status, id];
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