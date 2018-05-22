JS Practice

Dates 

1.1 Test input if type of Date

function isDate(d){
    return d instanceof Date;
}


//Date is a stored object which can be referenced through constructor methods. 
//new Date(); returned Thu May 17 2018 04:35:55 GMT-0500 (CDT), which set the locally scoped Date object
//Then passing, the new Date object as an argument when calling the isDate function, its implicility sets the new Date object as variable d
// Instanceof method will compare new Date object to any stored Date object format, returning true if it matches just 1. 


1.2 Convert todaysDate to mm.dd.yy

var todaysDate = function(separator = '/'){ //initializing todaysDate and separator as the slashes passing as input
    today = new Date(); //setting current Date variable through new Date stored method.
    var dd = today.getDate(); //Date object .getDate method setting day
    var mm = today.getFullYear(); //Date object .getFullYear method setting month indexed integer
    if (dd < 10) dd = '0' + dd; //Concat 0 before single digit day variables
    if (mm < 10) mm = '0' + mm; //Concat 0 before single digit month variables
    return (mm + separator + yyyy); //returns full concat, formatted date
};

//Test Case in console returned:
todaysDate()//Called Date object method and set variable
"05/17/2018"
todaysDate('.'); //Passed '.' as the argument for the separator parameter in the todaysDate function in new format
"05.17.2018"

1.3  Function testing if today is a weekend Date

var isWeekend = function(date1){ //Initializing isWeekend function with sub-method of new Date object method
    var dt = new Date(date1); 
if (dt.getDay() == 6 || dt.getDay() == 0) //Calling Date object method .getDay and setting conditional if it is equal to the index of [6] OR
{ // [0] because those are the stored indexes of Saturday and Sunday for the .getDay Date object method.
    return true;
}
    return false;
} 

//On Weds, function correctly returned:
//isWeekend('')
false
