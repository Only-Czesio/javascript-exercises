const repeatString = function (string ,num) {
    let holdString = [];
    if (num < 0) return "ERROR";
    if (num === 0) return "";
    for (let i = 0; i < num; i++) {
        holdString += string;
    }
    return holdString;

};

// Do not edit below this line
module.exports = repeatString;
