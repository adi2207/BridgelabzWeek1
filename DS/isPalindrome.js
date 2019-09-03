/******************************************************************************
 * Execution    :   default node            terminal> node isPalindrome.js
 * 
 * Purpose      :   To check if the given word is a palindrome using Dequeue DS
 * 
 * @description
 * 
 * @file        :   isPalindrome.js
 * @overview    :   To check if the given word is a palindrome using Dequeue DS
 * @author      :   Aditi Pal
 * @version     :   1.0
 * @since       :   20-08-2019
*******************************************************************************/

/*
* @describe var readline used to hold the readline-sync package instant/object
*/
var readline = require('readline-sync');
var word = readline.question("input word");
/*
* @describe var obj to import the palindrome function
*/
var obj=require('../DS/utilityDS');
console.log(obj.isPalindrome(word));
