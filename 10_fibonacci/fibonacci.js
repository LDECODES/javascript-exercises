const fibonacci = function(index) {

    if (index < 0) {
        return "OOPS"
    }
    var i;
    var fib = [0, 1]; // Initialize array!
  
    for (i = 2; i <= 10000000; i++) {
      // Next Fibonacci number = previous + one before previous
      // Translated to JavaScript:
      fib[i] = fib[i - 2] + fib[i - 1];
    }
  
    return fib[index]; 
  };
  
  fibonacci(10000000); 
  

// Do not edit below this line
module.exports = fibonacci;
