/******************************************************************************
 * Execution    :   default node            terminal> node balancedParathesis.js
 * 
 * Purpose      :   To take a mathematical expression as an input and check whether
 *                  its paranthesis are balanced or not.
 * 
 * @description
 * 
 * @file        :   balancedParathesis.js
 * @overview    :   To take a mathematical expression as an input and check whether
 *                  its paranthesis are balanced or not.
 * @author      :   Aditi Pal
 * @version     :   1.0
 * @since       :   25-08-2019
*******************************************************************************/



/*
* @describe var readline used to hold the readline-sync package instant/object
*/
var readline=require('readline-sync');

/*
* @describe var expresion used to hold the expression input by the user
*/
var expression =readline.question("insert the expression");

/*
* @describe var obj used to hold the object of utilityDS file
*/
var obj=require('../DS/utilityDS');

/*
* @describe calling the isBalanced funtion
*/
console.log(obj.isBalanced(expression));