// controllers/transaccion.js
const Transaccion = require('../model/transaccion');

const getAllTransacciones = async (req, res) => {
    try {
        const transacciones = await Transaccion.getAll();
        res.json(transacciones);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getTransaccionById = async (req, res) => {
    try {
        const transaccion = await Transaccion.getById(req.params.id);
        if (!transaccion) {
            return res.status(404).json({ message: 'Transacción no encontrada' });
        }
        res.json(transaccion);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const createTransaccion = async (req, res) => {
    try {
        const { Transacion_id, Usuario_id, Tipo, Cantidad, Categoria_id, Fecha } = req.body;
        const nuevaTransaccion = await Transaccion.create(Transacion_id, Usuario_id, Tipo, Cantidad, Categoria_id, Fecha);
        res.status(201).json(nuevaTransaccion);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const updateTransaccion = async (req, res) => {
    try {
        const { Transacion_id, Usuario_id, Tipo, Cantidad, Categoria_id, Fecha } = req.body;
        const actualizada = await Transaccion.update(Transacion_id, Usuario_id, Tipo, Cantidad, Categoria_id, Fecha);
        res.status(200).json(actualizada);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteTransaccion = async (req, res) => {
    try {
        await Transaccion.delete(req.params.id);
        res.json({ message: 'Transacción eliminada correctamente' });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { getAllTransacciones, getTransaccionById, createTransaccion, updateTransaccion, deleteTransaccion };
