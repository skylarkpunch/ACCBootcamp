var hamming = function(){};

hamming.prototype.compute = function (a, b){
        var difference = 0;
        if (a.length == b.length){
            for(var i = 0; i < a.length; i++){
                if (a[i] !== b[i])
                difference++;
            }
        } else return "DNA strands must be of equal length.";
    }
