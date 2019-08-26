
/******************************************************************************
 * Execution    :   default node            terminal> node distance.js
 * 
 * Purpose      :   To take x and y as inputs, and returns its distance from 
 * 					the coordinates 0,0.
 * 
 * @description
 * 
 * @file        :   distance.js
 * @overview    :   Calculates eucaladian distance of the input x,y from 0,0.
 * @author      :   Aditi Pal
 * @version     :   1.0
 * @since       :   20-08-2019
*******************************************************************************/

function dist(x, y) {
	var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
	console.log(dist);
}

var readline = require('readline-sync');
var x = readline.question("input x");
var y = readline.question("input y");

dist(x, y);
