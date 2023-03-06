const reverseString = function (string) {
    if (string === "") return "";
    let stringReverse = [];

    for (let i = string.length - 1; i >= 0 ; i--) {
        stringReverse += string[i];
    }
    return stringReverse;

};

// const reverseString = function (string) {
//   return string.split("").reverse().join("");    It's shorter approach to this solution. Mine is without using abstract function split, reverse and join.
// };

// Do not edit below this line
module.exports = reverseString;
