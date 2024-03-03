function removeFromArray(array) {
    // Convert arguments into an array excluding the first element (which is the array to modify)
    var elementsToRemove = Array.from(arguments).slice(1);
    
    // Iterate through elements to remove
    elementsToRemove.forEach(function(element) {
        // Find the index of the element to remove
        var index = array.indexOf(element);
        
        // If the element is found, remove it using splice
        if (index !== -1) {
            array.splice(index, 1);
        }
    });
    
    // Return the modified array
    return array;
}

// Test the function
console.log(removeFromArray([1, 2, 3, 4], 3)); // Output: [1, 2, 4]



// Do not edit below this line
module.exports = removeFromArray;
