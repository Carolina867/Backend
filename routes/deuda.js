// routes/deuda.js
const express = require('express');
const DeudaController = require('../controllers/deuda');
const router = express.Router();

router.get('/', DeudaController.getAllDeudas);
router.get('/:id', DeudaController.getDeudaById);
router.post('/', DeudaController.createDeuda);
router.put('/:id', DeudaController.updateDeuda);
router.delete('/:id', DeudaController.deleteDeuda);

module.exports = router;
