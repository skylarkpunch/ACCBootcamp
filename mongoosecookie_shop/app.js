var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mongoosecookie_shop");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log("we're connected");  
});


//Setting Schema
var productSchema = new mongoose.Schema({
    type: String,
    price: Number,
    tasty: Boolean
});



var Product = mongoose.model("Product", productSchema);



//adding objects via new(), save() method
var theProduct = new Product({
    type: "Chocolate chip",
    price: 1.99,
    tasty: true
    });

    theProduct.save(function (err, theProduct) {
        if (err) return console.error(err);
             console.log(theProduct.type, "saved");
           });

var theProduct = new Product({
    type: "Raisin",
    price: 2.49,
    tasty: false
       });

theProduct.save(function (err, theProduct) {
      if (err) return console.error(err);
        console.log(theProduct.type, "saved");
        });
    

//adding/saving objects via create()
 Product.create({
        type: "Sugar",
        price: 1.99,
        tasty: true
    }, function(err, Product){
        if(err){
            console.log(err)
        } else {
            console.log(Product.type, "saved");
        }
    });


//function to return all tasty:true object properties
Product.find({tasty:true}, function(err, Product){
        if(err){
            console.log("There was an error in your search.")
            console.log(err);
        } else {
            console.log("Here is your search request:")
            console.log(Product)
        }   
    });

  