// routes/presupuesto.js
const express = require('express');
const PresupuestoController = require('../controllers/presupuesto');
const router = express.Router();

router.get('/', PresupuestoController.getAllPresupuestos);
router.get('/:id', PresupuestoController.getPresupuestoById);
router.post('/', PresupuestoController.createPresupuesto);
router.put('/:id', PresupuestoController.updatePresupuesto);
router.delete('/:id', PresupuestoController.deletePresupuesto);

module.exports = router;
