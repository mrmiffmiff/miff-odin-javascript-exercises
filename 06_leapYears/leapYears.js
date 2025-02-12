// given solution uses const booleans to represent these checks but I personally don't see the use in this case
const leapYears = function (year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
