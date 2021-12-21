const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();
const adminData = require('./admin');


router.get('/', (req, res, next) => {
    const products = adminData.products;
    console.log(products);
    res.render('shop',{products:adminData.products, title:'My shops'});
  });
  

module.exports = router;