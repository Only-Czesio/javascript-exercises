const convertToCelsius = function (inFahr) {
  let answer = (inFahr - 32) / 1.8;
  return Math.round(answer * 10) / 10;
};

const convertToFahrenheit = function (inCels) {
  let answer = (inCels * 1.8) + 32;
  return Math.round(answer * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
