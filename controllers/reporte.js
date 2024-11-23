const Reporte = require('../model/reporte');

const getAllReportes = async (req, res) => {
    try {
        const reportes = await Reporte.getAll();
        res.json(reportes);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getReporteById = async (req, res) => {
    try {
        const reporte = await Reporte.getById(req.params.id);
        if (!reporte) {
            return res.status(404).json({ message: 'Reporte no encontrado' });
        }
        res.json(reporte);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const createReporte = async (req, res) => {
    try {
        const { Reporte_id, Usuario_id, Periodo, Total_Gastos, Total_Ingresos } = req.body;
        const nuevoReporte = await Reporte.create(Reporte_id, Usuario_id, Periodo, Total_Gastos, Total_Ingresos);
        res.status(201).json(nuevoReporte);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const updateReporte = async (req, res) => {
    try {
        const { Reporte_id, Usuario_id, Periodo, Total_Gastos, Total_Ingresos } = req.body;
        const actualizado = await Reporte.update(Reporte_id, Usuario_id, Periodo, Total_Gastos, Total_Ingresos);
        res.status(200).json(actualizado);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteReporte = async (req, res) => {
    try {
        await Reporte.delete(req.params.id);
        res.json({ message: 'Reporte eliminado correctamente' });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { getAllReportes, getReporteById, createReporte, updateReporte, deleteReporte };
