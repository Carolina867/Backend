const Recordatorio = require('../model/recordatorio');

const getAllRecordatorios = async (req, res) => {
    try {
        const recordatorios = await Recordatorio.getAll();
        res.json(recordatorios);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getRecordatorioById = async (req, res) => {
    try {
        const recordatorio = await Recordatorio.getById(req.params.id);
        if (!recordatorio) {
            return res.status(404).json({ message: 'Recordatorio no encontrado' });
        }
        res.json(recordatorio);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const createRecordatorio = async (req, res) => {
    try {
        const { Recordatorio_id, Usuario_id, Deuda_id, Fecha_Recordatorio, Notificacion_Enviada } = req.body;
        const nuevoRecordatorio = await Recordatorio.create(Recordatorio_id, Usuario_id, Deuda_id, Fecha_Recordatorio, Notificacion_Enviada);
        res.status(201).json(nuevoRecordatorio);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const updateRecordatorio = async (req, res) => {
    try {
        const { Recordatorio_id, Usuario_id, Deuda_id, Fecha_Recordatorio, Notificacion_Enviada } = req.body;
        const actualizado = await Recordatorio.update(Recordatorio_id, Usuario_id, Deuda_id, Fecha_Recordatorio, Notificacion_Enviada);
        res.status(200).json(actualizado);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteRecordatorio = async (req, res) => {
    try {
        await Recordatorio.delete(req.params.id);
        res.json({ message: 'Recordatorio eliminado correctamente' });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { getAllRecordatorios, getRecordatorioById, createRecordatorio, updateRecordatorio, deleteRecordatorio };
