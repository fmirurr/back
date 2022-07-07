const { Router } = require("express");
const router = Router();

const { getVehicle } = require("../controllers/vehicle.controller");

// Vehicle
router.get("/vehicle", getVehicle)

module.exports = router;
