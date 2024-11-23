const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
require('dotenv').config();

// Configuración del transporte
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

// Endpoint para recuperación de contraseña
router.post('/recuperarContrasena', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send('El correo electrónico es requerido.');
    }

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: 'Recuperación de contraseña',
        text: 'Haz clic en el siguiente enlace para recuperar tu contraseña: https://tu-app.com/reset-password'
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            return res.status(500).send('Error al enviar el correo.');
        }

        res.status(200).send('Correo de recuperación enviado con éxito.');
    });
});

module.exports = router;