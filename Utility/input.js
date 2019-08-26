
var rl = require('readline-sync');

module.exports.getReadlineInput = function () {
    var x=rl.question("input value");
    return x;
}