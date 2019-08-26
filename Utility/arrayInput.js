
var rl = require('readline-sync');

module.exports.getArray = function (n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr[i] = rl.question("input array value");
    }
    return arr;
}