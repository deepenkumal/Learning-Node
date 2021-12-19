const http = require("http");
const express = require("express");
const parserBody = require("body-parser");
const app = express();

app.use(parserBody.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method ="POST" > <input type="text" name="title" > <button type="submit" >Add product</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1> This is node express !</h1>");
});

app.listen(3000);
