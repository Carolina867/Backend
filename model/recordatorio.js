const db = require('../config/mysql');

const Recordatorio = {
    getAll: async () => {
        const [rows] = await db.query('SELECT Recordatorio_id, Usuario_id, Deuda_id, Fecha_Recordatorio, Notificacion_Enviada FROM recordatorio');
        return rows;
    },
    getById: async (Recordatorio_id) => {
        const [rows] = await db.query('SELECT Recordatorio_id, Usuario_id, Deuda_id, Fecha_Recordatorio, Notificacion_Enviada FROM recordatorio WHERE Recordatorio_id = ?', [Recordatorio_id]);
        return rows[0];
    },
    create: async (Recordatorio_id, Usuario_id, Deuda_id, Fecha_Recordatorio, Notificacion_Enviada) => {
        await db.query('INSERT INTO recordatorio (Recordatorio_id, Usuario_id, Deuda_id, Fecha_Recordatorio, Notificacion_Enviada) VALUES (?, ?, ?, ?, ?)', [Recordatorio_id, Usuario_id, Deuda_id, Fecha_Recordatorio, Notificacion_Enviada]);
        return { Recordatorio_id, Usuario_id, Deuda_id, Fecha_Recordatorio, Notificacion_Enviada };
    },
    update: async (Recordatorio_id, Usuario_id, Deuda_id, Fecha_Recordatorio, Notificacion_Enviada) => {
        await db.query('UPDATE recordatorio SET Usuario_id = ?, Deuda_id = ?, Fecha_Recordatorio = ?, Notificacion_Enviada = ? WHERE Recordatorio_id = ?', [Usuario_id, Deuda_id, Fecha_Recordatorio, Notificacion_Enviada, Recordatorio_id]);
        return { Recordatorio_id, Usuario_id, Deuda_id, Fecha_Recordatorio, Notificacion_Enviada };
    },
    delete: async (Recordatorio_id) => {
        await db.query('DELETE FROM recordatorio WHERE Recordatorio_id = ?', [Recordatorio_id]);
        return { Recordatorio_id };
    }
};

module.exports = Recordatorio;
