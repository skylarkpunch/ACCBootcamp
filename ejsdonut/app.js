var express = require('express');
var app = express();

app.set('view engine', 'ejs');

//home route
app.get('/', function (req, res)  {
  res.render('pages/index');
});

//about route
app.get('/about', function (req, res)  {
  res.render('pages/about');
});

//contact route
app.get('/contact', function (req, res)  {
  res.render('pages/contact');
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