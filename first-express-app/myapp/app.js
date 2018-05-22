const express = require('express');
const app = express();

app.get('/', function (req, res){
  res.render('index.ejs', {pastry: 'donuts'});
});

app.get('/r/:subreddit', function (req, res){
  console.log(req);
  res.send('Welcome to the ' + req.params.subreddit +' page!');
});

app.get('/:order/:breakfast', function (req, res){
  var comments = {
    eggs: 'Scrambled please',
    toast: 'With butter please',
    juice: 'Orange please'
  }
  var food = req.params.breakfast
  var comment = comments[food];
  res.send(comment);
});

app.get('/r/:subreddit/comments/:id/:title', function (req, res){
  console.log(req.params);
  res.send('Welcome to the comment page!');
});


app.get('/about', function (req, res){
  res.render('about.ejs', {pastry: 'brioche'});
});

app.get('/product', function (req, res){
  res.send('We make the products!');
});

app.use(express.static('public'));

app.get('*', function (req, res){
  res.send("Sorry, the page you're looking for doesn't exist.") 
});

app.listen(5000, function(){
  console.log('Example app listening on Port 5000!');
}); 