const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Importación de las rutas existentes
const categoriaRoutes = require('./routes/categoria');
const deudaRoutes = require('./routes/deuda');
const presupuestoRoutes = require('./routes/presupuesto');
const recordatorioRoutes = require('./routes/recordatorio');
const reporteRoutes = require('./routes/reporte');
const transaccionRoutes = require('./routes/transaccion');
const usuarioRoutes = require('./routes/usuario');

// Importación de la nueva ruta para recuperación de contraseñas
const passwordRecoveryRoutes = require('./routes/passwordRecovery');

// Cargar variables de entorno
dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(bodyParser.json());

// Usar las rutas existentes
app.use('/api/categoria', categoriaRoutes);
app.use('/api/deuda', deudaRoutes);
app.use('/api/presupuesto', presupuestoRoutes);
app.use('/api/recordatorio', recordatorioRoutes);
app.use('/api/reporte', reporteRoutes);
app.use('/api/transaccion', transaccionRoutes);
app.use('/api/usuario', usuarioRoutes);

// Registrar la nueva ruta de recuperación de contraseña
app.use('/api', passwordRecoveryRoutes); // Cambiado para que esté bajo /api

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});