JS Practice 

Strings 

1.1- Test whether argument is a String

function isString(input){
    if( typeof input === "string"){
        return true;
    } else
    return false;
}

// console.log(isString("Coding is Sexy")); returned true because datatype is strictly equal to "string"
// console.log(isString(9)); returned false because datatype is integer not "string"

1.2 Convert string to Array

stringToArray = function(str){
    return str.trim().split(" ");
};
//str.trim.split method removes and splits any strings seperated by whitespaces into 2 objects, creating an array
// stringToArray("Blistering Barnacles"); returned 2 objects in an array ["Blistering", "Barnacles"]
//stringtoArray(923); returned error


1.3 Return abbreviated form of name

var abbrName = function(fullName){
    if (fullName){
        var split_names = fullName.trim().split(" ");
        if (split_names.length > 1){
            return(split_names[0] + " " + split_names[1].charAt(0) + ".");
        }
        return split_names[0];
    }
    return '';
};hconsole.log(abbrName("ashley hill"));

//first convert fullName string to array as in 1.2.
//Then conditional statement that if array length is greater than 1 return [0]indexed, or first item in array
//Concat with the [0]indexed, or first character of the [1] indexed, or 2nd item of array
//console.log(abbrName("Ashley Hill")); returned Ashley H.