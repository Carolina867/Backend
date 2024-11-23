const db = require('../config/mysql');

const Deuda = {
    getAll: async () => {
        const [rows] = await db.query('SELECT Deuda_id, Usuario_id, Tipo, Monto_total, Saldo_Restante, Fecha_Vencimiento, Descripcion FROM deuda');
        return rows;
    },
    getById: async (Deuda_id) => {
        const [rows] = await db.query('SELECT Deuda_id, Usuario_id, Tipo, Monto_total, Saldo_Restante, Fecha_Vencimiento, Descripcion FROM deuda WHERE Deuda_id = ?', [Deuda_id]);
        return rows[0];
    },
    create: async (Deuda_id, Usuario_id, Tipo, Monto_total, Saldo_Restante, Fecha_Vencimiento, Descripcion) => {
        await db.query('INSERT INTO deuda (Deuda_id, Usuario_id, Tipo, Monto_total, Saldo_Restante, Fecha_Vencimiento, Descripcion) VALUES (?, ?, ?, ?, ?, ?, ?)', [Deuda_id, Usuario_id, Tipo, Monto_total, Saldo_Restante, Fecha_Vencimiento, Descripcion]);
        return { Deuda_id, Usuario_id, Tipo, Monto_total, Saldo_Restante, Fecha_Vencimiento, Descripcion };
    },
    update: async (Deuda_id, Usuario_id, Tipo, Monto_total, Saldo_Restante, Fecha_Vencimiento, Descripcion) => {
        await db.query('UPDATE deuda SET Usuario_id = ?, Tipo = ?, Monto_total = ?, Saldo_Restante = ?, Fecha_Vencimiento = ?, Descripcion = ? WHERE Deuda_id = ?', [Usuario_id, Tipo, Monto_total, Saldo_Restante, Fecha_Vencimiento, Descripcion, Deuda_id]);
        return { Deuda_id, Usuario_id, Tipo, Monto_total, Saldo_Restante, Fecha_Vencimiento, Descripcion };
    },
    delete: async (Deuda_id) => {
        // Primero elimina los registros relacionados en `recordatorio`
        await db.query('DELETE FROM recordatorio WHERE Deuda_id = ?', [Deuda_id]);
    
        // Luego elimina el registro en `deuda`
        await db.query('DELETE FROM deuda WHERE Deuda_id = ?', [Deuda_id]);
    
        return { Deuda_id };
    }    
};

module.exports = Deuda;
