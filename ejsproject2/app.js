var express = require('express');
var app = express();
var router = express.Router();


 var messages = [
        {name: 'Jim', text: 'Im a cartoonist.'},
        {name: 'Jane', text: 'How about steak for dinner?'},
        {name: 'Gary', text: 'I like my steak a bit rare.'}, 
    ]

app.set('view engine', 'ejs')

app.get('/messages', (req, res) => {
    // render `home.ejs` with the list of posts
    res.render('messages', { messages: messages })
  })
  

//local hosting port 5000
app.listen(5000, function(){
    console.log('Example app listening on Port 5000!');
  }); 