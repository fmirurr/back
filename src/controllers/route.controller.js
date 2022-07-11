const db = require("../config/database");

const getRoutes = async (req, res) => {
  const response = await db.query("SELECT * FROM routes ORDER BY id ASC");
  try {
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const createRoute = async (req, res) => {
  const { start_at, end_at, travel_time, total_stops, action, organization_id, driver_id, vehicle_id } = req.body;
  const response = await pool.query(
    "INSERT INTO drivers (start_at, end_at, travel_time, total_stops, action, organization_id, driver_id, vehicle_id ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    [start_at, end_at, travel_time, total_stops, action, organization_id, driver_id, vehicle_id]
  );
  res.json({
    message: "Route Added successfully",
    body: {
      route: { start_at, end_at, travel_time, total_stops, action, organization_id, driver_id, vehicle_id },
    },
  });
};

const updateRoute = async (req, res) => {
  const id = parseInt(req.params.id);
  const { start_at, end_at, travel_time, total_stops, action, organization_id, driver_id, vehicle_id } = req.body;

  const response = await pool.query(
    "UPDATE drivers SET start_at = $1, end_at = $2, travel_time = $3, total_stops = $4, action = $5, organization_id = $6, driver_id = $7, vehicle_id = $8 WHERE id = $9",
    [start_at, end_at, travel_time, total_stops, action, organization_id, driver_id, vehicle_id, id]
  );
  res.json("Route Updated Successfully");
};

const deleteRoute = async (req, res) => {
  const id = parseInt(req.params.id);
  await pool.query("DELETE FROM drivers where id = $1", [id]);
  res.json(`Route ${id} deleted Successfully`);
};

module.exports = {
  getRoutes,
  createRoute,
  updateRoute,
  deleteRoute
};
