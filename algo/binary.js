/******************************************************************************
 * Execution    :   default node            terminal> node binary.js
 * 
 * Purpose      :   To swap nibbles in a binary number and check if 
 *                  its a power of 2
 * 
 * @description
 * 
 * @file        :   binary.js
 * @overview    :   Takes user input in decimal, converts to binary, 
 *                  swaps nibbles and checks if it is a power of 2
 * @author      :   Aditi Pal
 * @version     :   1.0
 * @since       :   20-08-2019
*******************************************************************************/


var obj = require('../Utility/utilityForAlgos');
var obj2 = require('../Utility/input');

var decimalNum = obj2.getReadlineInput();
var binaryNum = obj.toBinary(decimalNum);
var num = String(binaryNum).padStart(8, '0');
console.log("output after dec to binary converion", num);

function nibbleSwap(num) {
    var temp = num.substring(0, 4);
    var temp2 = num.substring(4, 8);

    return temp2 + temp;
}
console.log("output after nibble swap");
console.log(nibbleSwap(num));

function isPowerOf2(num) {
    var arr = num.toString().split("");
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 1)
            count++;
        if (count > 1)
            break;
    }
    if (count == 1)
        return true;
    else
        return false;
}
console.log("if the number is a power of 2", isPowerOf2(num));
