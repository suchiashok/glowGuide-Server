const express = require("express");
const fs = require("fs");
const router = express.Router();
const productsController = require(`../controllers/products-controllers`);

router.route('/')
.get(productsController.getAllProducts)
.post(productsController.postProduct)

router.route(`/:productId`)
.get(productsController.getProduct)

router.route(`/category/:category`)
.get(productsController.getProductsByCategory)

module.exports = router;



