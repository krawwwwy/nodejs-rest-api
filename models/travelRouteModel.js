// models/travelRouteModel.js
const db = require('../config/db');

const getAllRoutes = async () => {
  const result = await db.query('SELECT * FROM travel_routes ORDER BY id');
  return result.rows;
};

const addRoute = async (name, description, location, duration, difficulty) => {
  const result = await db.query(
    'INSERT INTO travel_routes (name, description, location, duration, difficulty) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [name, description, location, duration, difficulty]
  );
  return result.rows[0];
};

const updateRoute = async (id, name, description, location, duration, difficulty) => {
  const result = await db.query(
    'UPDATE travel_routes SET name = $1, description = $2, location = $3, duration = $4, difficulty = $5 WHERE id = $6 RETURNING *',
    [name, description, location, duration, difficulty, id]
  );
  return result.rows[0];
};

const deleteRoute = async (id) => {
  await db.query('DELETE FROM travel_routes WHERE id = $1', [id]);
};

module.exports = {
  getAllRoutes,
  addRoute,
  updateRoute,
  deleteRoute
};