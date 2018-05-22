JS Practice

Objects

1.1 Function to return object's keys in array

function isObject(obj){ //Function to test if argument is object, including reassigning functions as objects
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}

function getKeys(obj){
    if (!isObject(obj)) return []; //Returns elements of isObject's result, if none -returns empty array and stops running
    if (Object.keys) return Object.keys(obj); //If returns items from array then applies .keys Object method which returns keys
    var keysArray = []; //Checks inheritance through Object method .hasOwnProperty and, if it owns the key:value
    for (var key in obj) if (obj.hasOwnProperty(key)) keysArray.push(key);  //A new keysArray is created using the .push method
    return keysArray;
}