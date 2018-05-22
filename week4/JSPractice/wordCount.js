function count(str){ //Function to return object count of words
    var obj = {};
    str.split(" ").forEach(function(el, i, arr){ //Initializes as " " as separator to index occurrences/construct new array, then iterate through all elements
        obj[el] = obj[el]? ++obj[el]: 1; //Ternary operator checks to see if occurence already exists; if so it increments/stores value at 1
    });
    return obj;//Return obj as new array with key:value obj items of occurrences of words in a string
}

//Console Output after calling function:
    console.log(count("olly olly in come free"));
    VM832:1 {olly: 2, in: 1, come: 1, free: 1}
    undefined