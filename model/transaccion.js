const db = require('../config/mysql');

const Transaccion = {
    getAll: async () => {
        const [rows] = await db.query('SELECT Transacion_id, Usuario_id, Tipo, Cantidad, Categoria_id, Fecha FROM transaccion');
        return rows;
    },
    getById: async (Transacion_id) => {
        const [rows] = await db.query('SELECT Transacion_id, Usuario_id, Tipo, Cantidad, Categoria_id, Fecha FROM transaccion WHERE Transacion_id = ?', [Transacion_id]);
        return rows[0];
    },
    create: async (Transacion_id, Usuario_id, Tipo, Cantidad, Categoria_id, Fecha) => {
        await db.query('INSERT INTO transaccion (Transacion_id, Usuario_id, Tipo, Cantidad, Categoria_id, Fecha) VALUES (?, ?, ?, ?, ?, ?)', [Transacion_id, Usuario_id, Tipo, Cantidad, Categoria_id, Fecha]);
        return { Transacion_id, Usuario_id, Tipo, Cantidad, Categoria_id, Fecha };
    },
    update: async (Transacion_id, Usuario_id, Tipo, Cantidad, Categoria_id, Fecha) => {
        await db.query('UPDATE transaccion SET Usuario_id = ?, Tipo = ?, Cantidad = ?, Categoria_id = ?, Fecha = ? WHERE Transacion_id = ?', [Usuario_id, Tipo, Cantidad, Categoria_id, Fecha, Transacion_id]);
        return { Transacion_id, Usuario_id, Tipo, Cantidad, Categoria_id, Fecha };
    },
    delete: async (Transacion_id) => {
        await db.query('DELETE FROM transaccion WHERE Transacion_id = ?', [Transacion_id]);
        return { Transacion_id };
    }
};

module.exports = Transaccion;
