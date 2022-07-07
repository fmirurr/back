const db = require("../config/database");

const getVehicle = async (req, res) => {
  res.send("getVehicle");
  const response = await db.query(
    "SELECT * FROM vehicles"
  );
  console.log(response.rows)
}

module.exports = {
  getVehicle
}