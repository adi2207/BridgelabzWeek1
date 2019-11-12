/******************************************************************************
 * Execution    :   default node            terminal> node percentHeadsTails.js
 * 
 * Purpose      :   To take n as input and calculte the percentage of heads 
 * 					when a coin is flipped n times.
 * 
 * @description
 * 
 * @file        :   percentHeadsTails.js
 * @overview    :   To take n as input and calculte the percentage of heads 
 * 					when a coin is flipped n times.
 * @author      :   Aditi Pal
 * @version     :   1.0
 * @since       :   20-08-2019
*******************************************************************************/

var readline = require('readline-sync');
var n = readline.question('how many times to flip the coin ');

var num;
var counttails = 0;
var countheads = 0;
for (var i = 0; i < n; i++) {
	//num=Math.random();
	console.log(num);
	if (num < 0.5) {
		countheads++;
	}
	else {
		counttails++;
	}
}

console.log("head percent is " + ((countheads / n) * 100));
console.log("head percent is " + ((counttails / n) * 100));





