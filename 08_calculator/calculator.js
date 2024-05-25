const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((a, b) => a * b, 1);
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(num) {
  if (num === 0 || num === 1) {
      return 1;
  } else {
      return num * factorial(num - 1);
  }
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
