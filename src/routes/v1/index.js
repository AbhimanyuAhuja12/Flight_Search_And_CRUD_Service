const express = require('express');

const router = express.Router();

const airplaneRoutes = require('./airplane-routes');

const{InfoController} = require('../../controllers');

router.use('/airplanes' , airplaneRoutes);

router.get('/info',InfoController.info);

module.exports = router;