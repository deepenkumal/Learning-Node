const http = require('http');

// create server
const server = http.createServer((req,res)=>{
console.log("server started at port 3000");
console.log(req.url);
res.setHeader('Content-Type','txt/html')
res.write('<h1>Hello world!!</h1>')
});
server.listen(3000); //server started at port 3000;