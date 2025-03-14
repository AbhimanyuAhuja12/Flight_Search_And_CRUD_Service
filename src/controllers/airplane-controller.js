const { AirplaneService } = require("../services");

const { StatusCodes } = require("http-status-codes");

const AppError = require("../utils/errors/app-error");

const { SuccessResponse, ErrorResponse } = require("../utils/common");
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

    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    // console.log("Error:",error);
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * GET : /airplanes
 *  req-body
 *
 */

async function getAirplanes(req,res){
  try{
    const airplanes = await AirplaneService.getAirplanes();
    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(SuccessResponse);

  }catch(error){
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * GET : /airplanes/:id
 *  req-body
 *
 */

async function getAirplane(req,res){
  try{
    const airplanes = await AirplaneService.getAirplane(req.params.id);
    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(SuccessResponse);

  }catch(error){
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * DELETE : /airplanes/:id
 *  req-body
 *
 */
async function destroyAirplane(req,res){
  try{
    const airplanes = await AirplaneService.destroyAirplane(req.params.id);
    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(SuccessResponse);

  }catch(error){
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function updateAirplaneCapacity(req, res) {
  try {
    const { id } = req.params; 
    const capacity = req.body.capacity || req.query.capacity; 

    if (!capacity) {
      throw new AppError('Capacity is required', StatusCodes.BAD_REQUEST);
    }

    const updatedAirplane = await AirplaneService.updateAirplaneCapacity(id, capacity);

    SuccessResponse.data = updatedAirplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}




module.exports = {
  createAirplane, getAirplanes , getAirplane , destroyAirplane , updateAirplaneCapacity
};
