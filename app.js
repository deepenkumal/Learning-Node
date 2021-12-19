const http = require("http");
const express = require("express");
const parserBody = require("body-parser");

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(parserBody.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);


app.listen(3000);
