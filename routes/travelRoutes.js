// routes/travelRoutes.js
const express = require('express');
const router = express.Router();
const travelRoutesController = require('../controllers/travelRoutesController');

router.get('/routes', travelRoutesController.getRoutes);
router.get('/routes/:id', travelRoutesController.getRoute); // Добавляем этот новый роут
router.post('/routes', travelRoutesController.createRoute);
router.put('/routes/:id', travelRoutesController.updateRoute);
router.delete('/routes/:id', travelRoutesController.deleteRoute);

module.exports = router;