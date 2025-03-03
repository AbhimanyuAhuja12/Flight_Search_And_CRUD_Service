const express = require("express");

const router = express.Router();

const { CityController } = require("../../controllers");
const { CityMiddleware } = require("../../middlewares");

// (POST /api/v1/cities)
router.post("/", CityMiddleware.validateCreateRequest, CityController.createCity);

// (GET /api/v1/cities)
router.get("/", CityController.getCities);

// (GET /api/v1/cities/:id)
router.get("/:id", CityController.getCity);

//(PATCH /api/v1/cities/:id)
router.patch("/:id", CityController.updateCity);

// (DELETE /api/v1/cities/:id)
router.delete("/:id", CityController.deleteCity);

module.exports = router;
