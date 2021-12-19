const http = require('http');
const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log('Hello middleware');
    res.write('<h1>Hello middleware!</h1>')
    next();
})

app.use((req,res,next)=>{
    console.log('Another middleware!!');
    res.write('<h1>Hello Another middleware!</h1>')

})

// create server
const server = http.createServer(app)
server.listen(3000); //server started at port 3000;