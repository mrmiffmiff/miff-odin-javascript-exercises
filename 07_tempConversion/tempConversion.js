function roundToOneDecimalPlace(number) {
  return Math.round(number * 10) / 10; // this feels so silly but it works
}

const convertToCelsius = function (fTemp) {
  return roundToOneDecimalPlace((fTemp - 32) * (5 / 9));
};

const convertToFahrenheit = function (cTemp) {
  return roundToOneDecimalPlace(cTemp * (9 / 5) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
