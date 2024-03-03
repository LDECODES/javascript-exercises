const sumAll = function(start, end) {
    let sum = 0;
    for (let value = start; value <= end ; value++) { 
        
        sum += value;
        

    }
    
    return sum ;

};

sumAll(1, 4);



// Do not edit below this line
module.exports = sumAll;
