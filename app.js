// app.js
var http = require('http'); // 1

http.createServer(function (request, response) { // 2
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World\n');
}).listen(3000); // 3

console.log('Server running at http://127.0.0.1:3000/');