

var rl = require('readline-sync');

module.exports.get2DArray = function (m,n) {
    var arr = new Array(n);
    for (var i = 0; i < n; i++) {
        arr[i] = new Array(m);
        for(var j=0;j<m;j++)
        {
            arr[i][j] = rl.question("input 2D array value");
        }
    }
    return arr;
}