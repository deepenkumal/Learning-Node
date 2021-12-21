const express = require("express");

const path = require('path');
const router = express.Router();

const productControllers = require('../controllers/product');
const products = [];
//admin/add-product ->GET
router.get('/add-product', productControllers.getAddProduct);

//admin/add-product ->POST
router.post('/add-product',productControllers.postAddProduct);

exports.routes = router;
