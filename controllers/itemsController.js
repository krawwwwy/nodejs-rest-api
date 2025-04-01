// controllers/itemsController.js
const itemModel = require('../models/itemModel');

// Получение всех элементов
const getItems = async (req, res) => {
  try {
    const items = await itemModel.getAllItems();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Создание элемента
const createItem = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newItem = await itemModel.addItem(name, description);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Обновление элемента
const updateItem = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const updatedItem = await itemModel.updateItem(id, name, description);
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Удаление элемента
const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    await itemModel.deleteItem(id);
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getItems,
  createItem,
  updateItem,
  deleteItem
};