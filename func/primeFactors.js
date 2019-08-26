/******************************************************************************
 * Execution    :   default node            terminal> node primeFactors.js
 * 
 * Purpose      :   To calculate prime factors of a given number.
 * 
 * @description
 * 
 * @file        :   primeFactors.js
 * @overview    :   To calculate prime factors of a given number.
 * @author      :   Aditi Pal
 * @version     :   1.0
 * @since       :   20-08-2019
*******************************************************************************/


function primeFactors(n) {
    while (n % 2 == 0) {
        console.log("2 ");
        n = n / 2;
    }
    for (var i = 3; (i * i) <= n; i = i + 2) {
        while (n % i == 0) {
            console.log(i + " ");
            n = n / i;
        }
    }
    if (n > 2) {
        console.log(n);
    }
}


var inputObj = require('../Utility/input');
var n = inputObj.getReadlineInput();

primeFactors(n);
