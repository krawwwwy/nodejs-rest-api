// controllers/travelRoutesController.js
const travelRouteModel = require('../models/travelRouteModel');

const getRoutes = async (req, res) => {
  try {
    const routes = await travelRouteModel.getAllRoutes();
    res.status(200).json(routes);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const createRoute = async (req, res) => {
  const { name, description, location, duration, difficulty } = req.body;
  try {
    const newRoute = await travelRouteModel.addRoute(name, description, location, duration, difficulty);
    res.status(201).json(newRoute);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateRoute = async (req, res) => {
  const { id } = req.params;
  const { name, description, location, duration, difficulty } = req.body;
  try {
    const updatedRoute = await travelRouteModel.updateRoute(id, name, description, location, duration, difficulty);
    res.status(200).json(updatedRoute);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteRoute = async (req, res) => {
  const { id } = req.params;
  try {
    await travelRouteModel.deleteRoute(id);
    res.status(200).json({ message: 'Route deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getRoutes,
  createRoute,
  updateRoute,
  deleteRoute
};