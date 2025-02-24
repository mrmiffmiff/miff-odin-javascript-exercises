const palindromes = function (string) {
    let stArr = string.toLowerCase().split('').filter(isAlphaNumeric);
    return stArr.join('') === stArr.reverse().join('');
};

function isAlphaNumeric(char) {
    let alphaString = "0123456789abcdefghijklmnopqrstuvwxyz";
    return alphaString.includes(char);
}

// Do not edit below this line
module.exports = palindromes;
