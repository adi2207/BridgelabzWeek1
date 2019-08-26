
/******************************************************************************
 * Execution    :   default node            terminal> node harmonicSum.js
 * 
 * Purpose      :   To take 'n' as an input, and return its harmonic sum.
 * 
 * @description
 * 
 * @file        :   harmonicSum.js
 * @overview    :   Harmonic sum is the sum of reciprocals of integers from 1 to n.
 * @author      :   Aditi Pal
 * @version     :   1.0
 * @since       :   20-08-2019
*******************************************************************************/
var inputObj = require('../Utility/input');

var n = inputObj.getReadlineInput();

/*
* @description formula to compute harmonic number:1/1 + 1/2 + ... + 1/N 
*/

var output = function (n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum = sum + 1 / i;
    }
    return sum;
};

function executor(n, output) {
    console.log(output(n));
}

executor(n, output);


