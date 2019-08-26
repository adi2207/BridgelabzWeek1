
/******************************************************************************
 * Execution    :   default node            terminal> node print2DArray.js
 * 
 * Purpose      :   To input and print a 2D array.
 * 
 * @description
 * 
 * @file        :   print2DArray.js
 * @overview    :   To input and print a 2D array.
 * @author      :   Aditi Pal
 * @version     :   1.0
 * @since       :   20-08-2019
*******************************************************************************/

var inputObj = require('../Utility/2DArrayInput');
var inputObj2 = require('../Utility/input');

var m = inputObj2.getReadlineInput();
var n = inputObj2.getReadlineInput();

var arr = inputObj.get2DArray(m, n);

console.log(arr);