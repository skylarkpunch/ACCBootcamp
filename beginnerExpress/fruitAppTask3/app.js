var express = require('express');
var http = require('http');
var app = express();
var router = express.Router();

//Task 3

router.get('/', function (req, res){
    res.send('This is the root path/url');
  });

router.get('/fruit', function (req, res){
    res.send('Welcome to the fruit home page!');
  });

router.get('/fruit/:someFruit', function (req, res){
    res.send('So I take it your favorite fruit is ' + req.params.someFruit +'?');
  });

//Task 4

router.get('/bankaccount/:name/:balance', function(req, res){
  var name = req.params.name;
  var balance = parseInt(req.params.balance);
  if (balance < 50) 
    res.send('So ' + name + ', I understand you have $' + balance + ' in your bank account. Can you loan me some money?');
  else res.send('Hello poor ' + name + '.');
});

app.use('/', router);

app.listen(5000, function(){
  console.log('Example app listening on Port 5000!');
});