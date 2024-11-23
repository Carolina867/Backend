const Categoria = require('../model/categoria');

const getAllCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.getAll();
        res.json(categorias);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getCategoriaById = async (req, res) => {
    try {
        const categoria = await Categoria.getById(req.params.id);
        if (!categoria) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        res.json(categoria);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const createCategoria = async (req, res) => {
    try {
        const { Nombre_Categoria } = req.body;
        const nuevaCategoria = await Categoria.create(Nombre_Categoria);
        res.status(201).json(nuevaCategoria);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const updateCategoria = async (req, res) => {
    try {
        const { Categoria_id, Nombre_Categoria } = req.body;
        const actualizada = await Categoria.update(Categoria_id, Nombre_Categoria);
        res.status(200).json(actualizada);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteCategoria = async (req, res) => {
    try {
        await Categoria.delete(req.params.id);
        res.json({ message: 'Categoría eliminada correctamente' });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { getAllCategorias, getCategoriaById, createCategoria, updateCategoria, deleteCategoria };
