var express = require('express');
var app = express();

app.set('view engine', 'ejs');

//home route
app.get('/', function (req, res)  {
  var pizza = 'I like my pizza with extra pineapple.';
  res.render('index', {
    pizza: pizza
  });
});

//about route
app.get('/about', function (req, res)  {
  var cappuccino = 'I like my cappuccino to be sweet.';
  res.render('about', {
    cappuccino: cappuccino
  });
});

//contact route
app.get('/contact', function (req, res)  {
  var fries = 'I like my fries crispy with extra salt.';
  res.render('contact', {
    fries: fries
  });
});


//error handler
app.use(express.static('public'));
app.get('*', function (req, res){
  res.send("Sorry, the page you're looking for doesn't exist.") 
});


//local hosting port 5000
app.listen(5000, function(){
  console.log('Example app listening on Port 5000!');
}); 