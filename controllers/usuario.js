// controllers/usuario.js
const Usuario = require('../model/usuario');

const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.getAll();
        res.json(usuarios);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getUsuarioById = async (req, res) => {
    try {
        const usuario = await Usuario.getById(req.params.id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(usuario);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const createUsuario = async (req, res) => {
    try {
        const { Usuario_id, Nombre, Correo_Electronico, Contraseña } = req.body;

        // Crear un usuario incluyendo la contraseña original y su hash
        const nuevoUsuario = await Usuario.create(Usuario_id, Nombre, Correo_Electronico, Contraseña);
        res.status(201).json(nuevoUsuario);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const updateUsuario = async (req, res) => {
    try {
        const { Usuario_id, Nombre, Correo_Electronico, Contraseña } = req.body;

        // Actualizar usuario con la contraseña original y el nuevo hash
        const actualizado = await Usuario.update(Usuario_id, Nombre, Correo_Electronico, Contraseña);
        res.status(200).json(actualizado);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteUsuario = async (req, res) => {
    try {
        await Usuario.delete(req.params.id);
        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { getAllUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario };
