// routes/transaccion.js
const express = require('express');
const TransaccionController = require('../controllers/transaccion');
const router = express.Router();

router.get('/', TransaccionController.getAllTransacciones);
router.get('/:id', TransaccionController.getTransaccionById);
router.post('/', TransaccionController.createTransaccion);
router.put('/:id', TransaccionController.updateTransaccion);
router.delete('/:id', TransaccionController.deleteTransaccion);

module.exports = router;
