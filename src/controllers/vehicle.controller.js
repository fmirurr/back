const db = require("../config/database");

const getVehicle = async (req, res) => {
  const response = await db.query(
    "SELECT * FROM vehicles ORDER BY nid ASC"
  );
  try {
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getVehicle
}