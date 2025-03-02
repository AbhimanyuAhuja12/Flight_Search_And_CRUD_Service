const {CityService} = require('../services');

const { StatusCodes } = require("http-status-codes");

const AppError = require("../utils/errors/app-error");

const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * POST : /cities
 *  req-body  {name: 'London'}
 *
 */

async function createCity(req, res) {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    });

    SuccessResponse.data = city;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    console.error("Error in createCity:", error);
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}


module.exports={
    createCity,
}