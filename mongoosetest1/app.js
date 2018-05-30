var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mongoosetest1");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log("we're connected");  
});

var userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

var User = mongoose.model("User", userSchema);

User.create({
    name: "Elaine",
    age: 39,
    email: "ElaineBenes@gmail.com"
}, function(err, user){
    if(err){
        console.log(err)
    } else {
        console.log(user);
    }
});
    