const { Router } = require("express");
const router = Router();

const {
  getDrivers,
  createDriver,
  deleteDriver,
  updateDriver,
} = require("../controllers/driver.controller");
const {
  getRoutes,
  createRoute,
  updateRoute,
  deleteRoute,
} = require("../controllers/route.controller");
const {
  getVehicles,
  createVehicles,
  updateVehicles,
  deleteVehicles,
} = require("../controllers/vehicle.controller");

// Driver
router.get("/drivers", getDrivers);
router.post("/drivers", createDriver);
router.put("/drivers/:id", updateDriver);
router.delete("/drivers/:id", deleteDriver);

// Routes
router.get("/routes", getRoutes);
router.post("/routes", createRoute);
router.put("/routes/:id", updateRoute);
router.delete("/routes/:id", deleteRoute);

// Vehicle
router.get("/vehicles", getVehicles);
router.post("/vehicles", createVehicles);
router.put("/vehicles/:id", updateVehicles);
router.delete("/vehicles/:id", deleteVehicles);

module.exports = router;
