const { AirplaneService } = require("../services");

const { StatusCodes } = require("http-status-codes");

/**
 * POST : /airplanes
 *  req-body
 *
 */

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    return res
      .status(StatusCodes.CREATED)
      .json({
        success: true,
        message: "Successfully created an airplane",
        error: {},
        data: airplane,
      });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: true,
      message: "Something went wrong while creating an airplane",
      data: {},
      error: {},
    });
  }
}

module.exports = {
  createAirplane,
};
