
/******************************************************************************
 * Execution    :   default node            terminal> node gambler.js
 * 
 * Purpose      :   To take stake and goal and number of games as inputs, and   
 * 					return the win and loss percentage in each game.
 * 
 * @description
 * 
 * @file        :   gambler.js
 * @overview    :   To take stake and goal and number of games as inputs, and   
 * 					return the win and loss percentage in each game.
 * @author      :   Aditi Pal
 * @version     :   1.0
 * @since       :   20-08-2019
*******************************************************************************/

var obj = require('../Utility/input');

console.log("enter stake");
var stake = obj.getReadlineInput();
console.log("enter goal");
var goal = obj.getReadlineInput();
console.log("enter no of games");
var noOfGames = obj.getReadlineInput();

function generateRandomNo() {
    var x = Math.random();
    if (x < 0.5)
        return 0;
    else
        return 1;
}

function gamble(stake, goal) {
    var losscount = 0;
    var wincount = 0;
    while (1) {
        if (parseInt(stake) <= 0) {
            break;
        }
        else if (parseInt(stake) >= parseInt(goal)) {
            break;
        }
        if (generateRandomNo() == 1) {
            stake = parseInt(stake) + 1;
            console.log("W");
            wincount++;
        }
        else if (generateRandomNo() == 0) {
            stake = parseInt(stake) - 1;
            console.log("L");
            losscount++;
        }
    }
    return wincount / (parseInt(wincount) + parseInt(losscount));
}

for (var i = 0; i < noOfGames; i++) {
    console.log("the win percent is  ", gamble(stake, goal));
}
