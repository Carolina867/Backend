// routes/usuario.js
const express = require('express');
const UsuarioController = require('../controllers/usuario');
const router = express.Router();

router.get('/', UsuarioController.getAllUsuarios);
router.get('/:id', UsuarioController.getUsuarioById);
router.post('/', UsuarioController.createUsuario);
router.put('/:id', UsuarioController.updateUsuario);
router.delete('/:id', UsuarioController.deleteUsuario);

module.exports = router;
