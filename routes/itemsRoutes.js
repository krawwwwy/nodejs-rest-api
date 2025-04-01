// routes/itemsRoutes.js
const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

// GET /api/items
router.get('/items', itemsController.getItems);

// POST /api/items
router.post('/items', itemsController.createItem);

// PUT /api/items/:id
router.put('/items/:id', itemsController.updateItem);  // Добавь этот маршрут

// DELETE /api/items/:id
router.delete('/items/:id', itemsController.deleteItem);  // И этот

module.exports = router;