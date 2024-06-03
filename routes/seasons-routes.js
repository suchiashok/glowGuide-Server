const express = require("express");
const fs = require("fs");
const router = express.Router();
const seasonsController = require('../controllers/seasons-controllers');

router.route('/')
.get(seasonsController.getAllSeasons)

module.exports = router;