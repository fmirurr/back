const { Router } = require("express");
const router = Router();

const { getDrivers } = require("../controllers/driver.controller");
const { getRoutes } = require("../controllers/route.controller");
const { getVehicles } = require("../controllers/vehicle.controller");

// Driver
router.get("/drivers", getDrivers)

// Routes
router.get("/routes", getRoutes)

// Vehicle
router.get("/vehicles", getVehicles)
module.exports = router;
