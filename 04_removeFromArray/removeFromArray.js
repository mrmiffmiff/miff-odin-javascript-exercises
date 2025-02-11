const removeFromArray = function (array, argument) {
    const returnArray = [];

    for (const value of array) {
        if (value === argument) continue;
        else returnArray.push(value);
    }

    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
