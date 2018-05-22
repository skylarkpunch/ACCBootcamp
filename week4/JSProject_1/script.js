
    name = prompt("Please enter your name", "");
    snack = prompt("What is your favorite snack?", "");
    drink = prompt("What is your favorite drink?", "");
    
    document.getElementById("demo").innerHTML = "Hi there " + name + " , it seems that you enjoy eating " + snack + " and drinking " + drink + "!";
    document.getElementById("demo").style.fontSize = "96px";
