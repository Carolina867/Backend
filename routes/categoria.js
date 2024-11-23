// routes/categoria.js
const express = require('express');
const CategoriaController = require('../controllers/categoria');
const router = express.Router();

// Obtener todas las categorías
router.get('/', CategoriaController.getAllCategorias);

// Obtener una categoría por ID
router.get('/:id', CategoriaController.getCategoriaById);

// Crear una nueva categoría
router.post('/', CategoriaController.createCategoria);

// Actualizar una categoría existente
router.put('/:id', CategoriaController.updateCategoria);

// Eliminar una categoría
router.delete('/:id', CategoriaController.deleteCategoria);

module.exports = router;
