const convertToCelsius = function(f) {
  let value = (f - 32) * 5/9;
  let final = Math.round(value * 10)/10
  return final;
};

const convertToFahrenheit = function(c) {
  let value = (c * 9/5) + 32
  let final = Math.round(value*10)/10
  return final;
};


convertToCelsius(32);
convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit 
};
