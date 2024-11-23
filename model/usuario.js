const bcrypt = require('bcrypt');
const db = require('../config/mysql');

const Usuario = {
    getAll: async () => {
        const [rows] = await db.query('SELECT Usuario_id, Nombre, Correo_Electronico, Contraseña_Plana FROM usuario');
        return rows;
    },
    getById: async (Usuario_id) => {
        const [rows] = await db.query(
            'SELECT Usuario_id, Nombre, Correo_Electronico, Contraseña_Plana FROM usuario WHERE Usuario_id = ?', 
            [Usuario_id]
        );
        return rows[0];
    },
    create: async (Usuario_id, Nombre, Correo_Electronico, Contraseña) => {
        // Hash de la contraseña
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(Contraseña, saltRounds);

        await db.query(
            'INSERT INTO usuario (Usuario_id, Nombre, Correo_Electronico, Contraseña, Contraseña_Plana) VALUES (?, ?, ?, ?, ?)', 
            [Usuario_id, Nombre, Correo_Electronico, hashedPassword, Contraseña]
        );
        return { Usuario_id, Nombre, Correo_Electronico, Contraseña };
    },
    update: async (Usuario_id, Nombre, Correo_Electronico, Contraseña) => {
        // Hash de la contraseña
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(Contraseña, saltRounds);

        await db.query(
            'UPDATE usuario SET Nombre = ?, Correo_Electronico = ?, Contraseña = ?, Contraseña_Plana = ? WHERE Usuario_id = ?', 
            [Nombre, Correo_Electronico, hashedPassword, Contraseña, Usuario_id]
        );
        return { Usuario_id, Nombre, Correo_Electronico, Contraseña };
    },
    delete: async (Usuario_id) => {
        await db.query('DELETE FROM usuario WHERE Usuario_id = ?', [Usuario_id]);
        return { Usuario_id };
    },
    verifyPassword: async (plainPassword, hashedPassword) => {
        // Verificar contraseña ingresada con la almacenada
        return await bcrypt.compare(plainPassword, hashedPassword);
    }
};

module.exports = Usuario;
