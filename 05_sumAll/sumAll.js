const sumAll = function (num1, num2) {
    if (!(Number.isInteger(num1) && Number.isInteger(num2))) return "ERROR"; // error on non-integers
    if (!(num1 > 0 && num2 > 0)) return "ERROR"; // error on non-positives
    let current, max;
    if (num1 < num2) {
        current = num1;
        max = num2;
    }
    else {
        current = num2;
        max = num1;
    }
    let sum = 0;
    for (; current <= max; current++) {
        sum += current;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
