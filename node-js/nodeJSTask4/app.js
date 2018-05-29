const http = require('http');
var casual = require('casual');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

var name = casual.name;
var country = casual.country;
var city = casual.city;
var phone = casual.phone;
var address = casual.address;
var month = casual.month;

server.listen(port, hostname, () => {
    console.log('Hello there ' + name + ' ! How was your trip to ' + country + ' ? Did you get to visit ' + city + ' ? I sure hope you had a wonderful time. Is your phone number still ' + phone + ' ? I will try to give you a call sometime. By the way, I want to send you a fresh load of bread at your address of ' + address + ' . Well anyways I will call you soon. I will be giving you a visit sometime before ' + month + ' . Until then, farewell!'); 
    console.log(`Server running at http://${hostname}:${port}/`);
});


