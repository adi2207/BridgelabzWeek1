/******************************************************************************
 * Execution    :   default node            terminal> node noOfBST.js
 * 
 * Purpose      :   To take the number n as input and return the no of BSTs that 
 *                  can be created using numbers 1 to n.
 * 
 * @description
 * 
 * @file        :   noOfBST.js
 * @overview    :   To take the number n as input and return the no of BSTs that 
 *                  can be created using numbers 1 to n.
 * @author      :   Aditi Pal
 * @version     :   1.0
 * @since       :   27-08-2019
*******************************************************************************/

/*
* @describe var readline used to hold the readline-sync package instant/object
*/
var readline=require('readline-sync');
/*
* @describe var readline used to hold the utilityDS object
*/
var obj=require('../DS/utilityDS');
/*
* @describe var n means the numbers  to n will make up the BST
*/
var n=parseInt(readline.question("Enter nodecount"));

console.log(obj.countNoOfBSTs(n));