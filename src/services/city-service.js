const { StatusCodes } = require("http-status-codes");
const { CityRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const cityRepository = new CityRepository();

async function createCity(data) {
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
    if (error.name === "SequelizeValidationError" || error.name === "SequelizeUniqueConstraintError") {
      let explanation = error.errors.map((err) => err.message);
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError("Cannot create a new City object", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getCities() {
  try {
    const cities = await cityRepository.getAll();
    return cities;
  } catch (error) {
    throw new AppError("Cannot fetch cities data", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getCity(id) {
  try {
    const city = await cityRepository.get(id);
    return city;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError("The requested city is not found", error.statusCode);
    }
    throw new AppError("Cannot fetch city data", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function updateCity(id, data) {
  try {
    const city = await cityRepository.update(id, data);
    return city;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError("The requested city is not found", error.statusCode);
    }
    throw new AppError("Cannot update city data", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function deleteCity(id) {
  try {
    const response = await cityRepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError("The requested city is not found", error.statusCode);
    }
    throw new AppError("Cannot delete the city", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
  createCity,
  getCities,
  getCity,
  updateCity,
  deleteCity,
};
