const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Welcome to the Fruit home page!'));

app.get('/banana', function (req, res){
  res.send('Im going bananas!');
});

app.get('/kiwi', function (req, res){
  res.send('Kiwis are great, but I dont like how hairy they are.');
});

app.get('/strawberry', function (req, res){
  res.send('Strawberries are natures perfect fruit.');
});


app.use(express.static('public'));

app.get('*', function (req, res){
  res.send("Sorry, the page you're looking for doesn't exist.") 
});

app.listen(5000, function(){
  console.log('Example app listening on Port 5000!');
}); 