// routes/recordatorio.js
const express = require('express');
const RecordatorioController = require('../controllers/recordatorio');
const router = express.Router();

router.get('/', RecordatorioController.getAllRecordatorios);
router.get('/:id', RecordatorioController.getRecordatorioById);
router.post('/', RecordatorioController.createRecordatorio);
router.put('/:id', RecordatorioController.updateRecordatorio);
router.delete('/:id', RecordatorioController.deleteRecordatorio);

module.exports = router;
