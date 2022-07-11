const db = require("../config/database");

const getVehicles = async (req, res) => {
  const response = await db.query("SELECT * FROM vehicles ORDER BY nid ASC");
  try {
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const createVehicles = async (req, res) => {
  const { plate } = req.body;
  const response = await pool.query("INSERT INTO vehicles (plate) VALUES ($1)", [
    plate,
  ]);
  res.json({
    message: "User Added successfully",
    body: {
      vehicle: { plate },
    },
  });
};

const updateVehicles = async (req, res) => {
  const nid = parseInt(req.params.id);
  const { plate } = req.body;

  const response = await pool.query(
    "UPDATE vehicles SET plate = $1 WHERE nid = $2",
    [plate, nid]
  );
  res.json("User Updated Successfully");
};

const deleteVehicles = async (req, res) => {
  const nid = parseInt(req.params.id);
  await pool.query("DELETE FROM vehicles where nid = $1", [nid]);
  res.json(`Vehicle ${nid} deleted Successfully`);
};

module.exports = {
  getVehicles,
  createVehicles,
  updateVehicles,
  deleteVehicles
};
