const db = require("../config/database");

const getDrivers = async (req, res) => {
  const response = await db.query("SELECT * FROM drivers ORDER BY nid ASC");
  try {
    res.status(200).send(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const createDriver = async (req, res) => {
  const { first_name, last_name } = req.body;
  const response = await pool.query(
    "INSERT INTO drivers (first_name, last_name) VALUES ($1, $2)",
    [first_name, last_name]
  );
  res.json({
    message: "Driver Added successfully",
    body: {
      driver: { first_name, last_name },
    },
  });
};

const updateDriver = async (req, res) => {
  const nid = parseInt(req.params.id);
  const { first_name, last_name } = req.body;

  const response = await pool.query(
    "UPDATE drivers SET first_name = $1, last_name = $2 WHERE nid = $3",
    [first_name, last_name, nid]
  );
  res.json("Driver Updated Successfully");
};

const deleteDriver = async (req, res) => {
  const nid = parseInt(req.params.id);
  await pool.query("DELETE FROM drivers where nid = $1", [nid]);
  res.json(`Drivers ${nid} deleted Successfully`);
};

module.exports = {
  getDrivers,
  createDriver,
  updateDriver,
  deleteDriver,
};
