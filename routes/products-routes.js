const express = require("express");
const fs = require("fs");
const router = express.Router();
const productsController = require(`../controllers/products-controllers`);

router.route('/')
.post(productsController.postProduct)

module.exports = router;



