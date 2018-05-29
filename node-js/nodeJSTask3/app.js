const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
var readlineSync = require('readline-sync'),
  spiceLevel = ['Spicy', 'very spicy', 'So spicy you wont be able to feel your face' ],
  index = readlineSync.keyInSelect(spiceLevel, 'How spicy would you like your tacos?');
  if (readlineSync.keyInYN('Ok so you want your tacos to be ' + spiceLevel[index] + ' ? Are you sure about this?')) {
    // 'Y' key was pressed.
    console.log('Ok, we will have your order right out.');
  } else {
    console.log('Whats the matter? Yo)u cant handle the heat?');
  }