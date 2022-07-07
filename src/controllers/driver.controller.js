const db = require("../config/database");

const getDriver = async (req, res) => {
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
  getDriver
}