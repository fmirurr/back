const db = require("../config/database");

const getRoutes = async (req, res) => {
  const response = await db.query(
    "SELECT * FROM routes ORDER BY id ASC"
  );
  try {
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getRoutes
}