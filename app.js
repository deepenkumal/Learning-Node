const http = require("http");

const path = require('path');
const express = require("express");
const parserBody = require("body-parser");

const app = express();

app.set('view engine','pug');
app.set('views','views');

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const error404 = require('./controllers/404')

app.use(parserBody.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes.routes);
app.use(shopRoutes);

app.use(error404.page404);

app.listen(3000);
