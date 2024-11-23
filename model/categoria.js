const db = require('../config/mysql');

const Categoria = {
    getAll: async () => {
        const [rows] = await db.query('SELECT Categoria_id, Nombre_Categoria FROM categoria');
        return rows;
    },
    getById: async (Categoria_id) => {
        const [rows] = await db.query('SELECT Categoria_id, Nombre_Categoria FROM categoria WHERE Categoria_id = ?', [Categoria_id]);
        return rows[0];
    },
    create: async (Nombre_Categoria) => {
        const [result] = await db.query('INSERT INTO categoria (Nombre_Categoria) VALUES (?)', [Nombre_Categoria]);
        return { Categoria_id: result.insertId, Nombre_Categoria };
    },
    update: async (Categoria_id, Nombre_Categoria) => {
        await db.query('UPDATE categoria SET Nombre_Categoria = ? WHERE Categoria_id = ?', [Nombre_Categoria, Categoria_id]);
        return { Categoria_id, Nombre_Categoria };
    },
    delete: async (Categoria_id) => {
        await db.query('DELETE FROM categoria WHERE Categoria_id = ?', [Categoria_id]);
        return { Categoria_id };
    }
};

module.exports = Categoria;
