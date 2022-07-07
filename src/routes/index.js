const { Router } = require("express");
const router = Router();

const { getVehicle } = require("../controllers/vehicle.controller");
const { getDriver } = require("../controllers/driver.controller");

// Vehicle
router.get("/vehicle", getVehicle)

// Driver
router.get("/driver", getDriver)

module.exports = router;
