const express = require("express");
const fs = require("fs");
const router = express.Router();
const user_productsController = require('../controllers/user_products-controllers');

router.route('/')
.get(user_productsController.getUserProducts)
.post(user_productsController.addUserProducts)

router.route('/:id')
.patch(user_productsController.updateUserProduct)
.delete(user_productsController.deleteUserProduct);

module.exports = router;