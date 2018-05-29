const http = require('http');
var asciiHeart = require('ascii-heart');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(asciiHeart()); 
    console.log(asciiHeart(10, 10));
    console.log(asciiHeart(40, 40, {
        fill: "❤"
    }));
    console.log(`Server running at http://${hostname}:${port}/`);
});

