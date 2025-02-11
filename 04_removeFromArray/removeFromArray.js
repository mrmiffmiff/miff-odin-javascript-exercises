const removeFromArray = function (array, ...args) {
    const returnArray = [];

    for (const value of array) {
        if (args.includes(value)) continue;
        else returnArray.push(value);
    }

    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
