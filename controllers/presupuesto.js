const Presupuesto = require('../model/presupuesto');

const getAllPresupuestos = async (req, res) => {
    try {
        const presupuestos = await Presupuesto.getAll();
        res.json(presupuestos);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getPresupuestoById = async (req, res) => {
    try {
        const presupuesto = await Presupuesto.getById(req.params.id);
        if (!presupuesto) {
            return res.status(404).json({ message: 'Presupuesto no encontrado' });
        }
        res.json(presupuesto);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const createPresupuesto = async (req, res) => {
    try {
        const { Presupuesto_id, Usuario_id, Categoria_id, Monto_Establecido } = req.body;
        const nuevoPresupuesto = await Presupuesto.create(Presupuesto_id, Usuario_id, Categoria_id, Monto_Establecido);
        res.status(201).json(nuevoPresupuesto);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const updatePresupuesto = async (req, res) => {
    try {
        const { Presupuesto_id, Usuario_id, Categoria_id, Monto_Establecido } = req.body;
        const actualizado = await Presupuesto.update(Presupuesto_id, Usuario_id, Categoria_id, Monto_Establecido);
        res.status(200).json(actualizado);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deletePresupuesto = async (req, res) => {
    try {
        await Presupuesto.delete(req.params.id);
        res.json({ message: 'Presupuesto eliminado correctamente' });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { getAllPresupuestos, getPresupuestoById, createPresupuesto, updatePresupuesto, deletePresupuesto };
