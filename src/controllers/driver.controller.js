const db = require("../config/database");

const getDrivers = async (req, res) => {
  const response = await db.query(
    "SELECT * FROM drivers ORDER BY nid ASC"
  );
  try {
    res.status(200).send(response.rows);
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getDrivers
}