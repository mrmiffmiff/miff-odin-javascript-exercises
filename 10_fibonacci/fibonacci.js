const fibonacci = function (targetIndex) {
    let target = parseInt(targetIndex);
    if (target < 0) return "OOPS";
    if (target === 0) return 0;
    if (target === 1 || target === 2) return 1;
    return fibonacci(target - 2) + fibonacci(target - 1);
};

// Do not edit below this line
module.exports = fibonacci;
