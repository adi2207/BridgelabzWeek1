
/******************************************************************************
 * Execution    :   default node            terminal> node couponCount.js
 * 
 * Purpose      :   To take no of coupons to be generated as an input, and return
 *                  the number of attempts to generate non repetative coupons.
 * 
 * @description
 * 
 * @file        :   couponCount.js
 * @overview    :   Takes input from user and returns the number of attempts needed
 *                  to generate non repetative coupons.
 * @author      :   Aditi Pal
 * @version     :   1.0
 * @since       :   20-08-2019
*******************************************************************************/

var rl = require('readline-sync');
var n = rl.question("input n");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
function findCouponCount(n) {
    var map = new Map();
    var couponCount = 0;
    var totalItr = 0;
    if (n > 10)
        return -1;
    while (couponCount != n) {
        var newCouponNumber = getRandomInt(0, 10);
        if (map.has(newCouponNumber)) {
        }
        else {
            map.set(newCouponNumber, 1);
            couponCount++;
        }
        totalItr++;
    }
    return totalItr;
}

console.log(findCouponCount(n));

module.exports = {
    getRandomInt,
    findCouponCount
}
