const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let total = 0;
  for (const x of arr) total += x;
  return total;
};

const multiply = function (arr) {
  let product = 1;
  for (const x of arr) product *= x;
  return product;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num == 0 || num == 1) return 1;
  else return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
