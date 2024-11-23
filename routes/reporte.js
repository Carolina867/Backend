// routes/reporte.js
const express = require('express');
const ReporteController = require('../controllers/reporte');
const router = express.Router();

router.get('/', ReporteController.getAllReportes);
router.get('/:id', ReporteController.getReporteById);
router.post('/', ReporteController.createReporte);
router.put('/:id', ReporteController.updateReporte);
router.delete('/:id', ReporteController.deleteReporte);

module.exports = router;
