const db = require('../config/mysql');

const Reporte = {
    getAll: async () => {
        const [rows] = await db.query('SELECT Reporte_id, Usuario_id, Periodo, Total_Gastos, Total_Ingresos FROM reporte');
        return rows;
    },
    getById: async (Reporte_id) => {
        const [rows] = await db.query('SELECT Reporte_id, Usuario_id, Periodo, Total_Gastos, Total_Ingresos FROM reporte WHERE Reporte_id = ?', [Reporte_id]);
        return rows[0];
    },
    create: async (Reporte_id, Usuario_id, Periodo, Total_Gastos, Total_Ingresos) => {
        await db.query('INSERT INTO reporte (Reporte_id, Usuario_id, Periodo, Total_Gastos, Total_Ingresos) VALUES (?, ?, ?, ?, ?)', [Reporte_id, Usuario_id, Periodo, Total_Gastos, Total_Ingresos]);
        return { Reporte_id, Usuario_id, Periodo, Total_Gastos, Total_Ingresos };
    },
    update: async (Reporte_id, Usuario_id, Periodo, Total_Gastos, Total_Ingresos) => {
        await db.query('UPDATE reporte SET Usuario_id = ?, Periodo = ?, Total_Gastos = ?, Total_Ingresos = ? WHERE Reporte_id = ?', [Usuario_id, Periodo, Total_Gastos, Total_Ingresos, Reporte_id]);
        return { Reporte_id, Usuario_id, Periodo, Total_Gastos, Total_Ingresos };
    },
    delete: async (Reporte_id) => {
        await db.query('DELETE FROM reporte WHERE Reporte_id = ?', [Reporte_id]);
        return { Reporte_id };
    }
};

module.exports = Reporte;
