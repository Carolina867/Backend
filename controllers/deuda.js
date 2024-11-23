const Deuda = require('../model/deuda');

const getAllDeudas = async (req, res) => {
    try {
        const deudas = await Deuda.getAll();
        res.json(deudas);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getDeudaById = async (req, res) => {
    try {
        const deuda = await Deuda.getById(req.params.id);
        if (!deuda) {
            return res.status(404).json({ message: 'Deuda no encontrada' });
        }
        res.json(deuda);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const createDeuda = async (req, res) => {
    try {
        const { Deuda_id, Usuario_id, Tipo, Monto_total, Saldo_Restante, Fecha_Vencimiento, Descripcion } = req.body;
        const nuevaDeuda = await Deuda.create(Deuda_id, Usuario_id, Tipo, Monto_total, Saldo_Restante, Fecha_Vencimiento, Descripcion);
        res.status(201).json(nuevaDeuda);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const updateDeuda = async (req, res) => {
    try {
        const { Deuda_id, Usuario_id, Tipo, Monto_total, Saldo_Restante, Fecha_Vencimiento, Descripcion } = req.body;
        const actualizada = await Deuda.update(Deuda_id, Usuario_id, Tipo, Monto_total, Saldo_Restante, Fecha_Vencimiento, Descripcion);
        res.status(200).json(actualizada);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteDeuda = async (req, res) => {
    try {
        await Deuda.delete(req.params.id);
        res.json({ message: 'Deuda eliminada correctamente' });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { getAllDeudas, getDeudaById, createDeuda, updateDeuda, deleteDeuda };
