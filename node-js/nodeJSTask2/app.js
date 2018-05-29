const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(hostname, port);
});



var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('What is your name? ');
var favFood = readlineSync.question('What is your favorite food? ');
var favDrink = readlineSync.question('What is your favorite drink? ');
console.log('Hi ' + userName + ' , your favorite food is' + favFood + 'and your favorite drink is ' + favDrink + '.');
 