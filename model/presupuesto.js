const db = require('../config/mysql');

const Presupuesto = {
    getAll: async () => {
        const [rows] = await db.query('SELECT Presupuesto_id, Usuario_id, Categoria_id, Monto_Establecido FROM presupuesto');
        return rows;
    },
    getById: async (Presupuesto_id) => {
        const [rows] = await db.query('SELECT Presupuesto_id, Usuario_id, Categoria_id, Monto_Establecido FROM presupuesto WHERE Presupuesto_id = ?', [Presupuesto_id]);
        return rows[0];
    },
    create: async (Presupuesto_id, Usuario_id, Categoria_id, Monto_Establecido) => {
        await db.query('INSERT INTO presupuesto (Presupuesto_id, Usuario_id, Categoria_id, Monto_Establecido) VALUES (?, ?, ?, ?)', [Presupuesto_id, Usuario_id, Categoria_id, Monto_Establecido]);
        return { Presupuesto_id, Usuario_id, Categoria_id, Monto_Establecido };
    },
    update: async (Presupuesto_id, Usuario_id, Categoria_id, Monto_Establecido) => {
        await db.query('UPDATE presupuesto SET Usuario_id = ?, Categoria_id = ?, Monto_Establecido = ? WHERE Presupuesto_id = ?', [Usuario_id, Categoria_id, Monto_Establecido, Presupuesto_id]);
        return { Presupuesto_id, Usuario_id, Categoria_id, Monto_Establecido };
    },
    delete: async (Presupuesto_id) => {
        await db.query('DELETE FROM presupuesto WHERE Presupuesto_id = ?', [Presupuesto_id]);
        return { Presupuesto_id };
    }
};

module.exports = Presupuesto;
