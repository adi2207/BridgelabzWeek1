/******************************************************************************
 * Execution    :   default node            terminal> node calender.js
 * 
 * Purpose      :   To print the calender of the month and year entered
 * 
 * @description
 * 
 * @file        :   calender.js
 * @overview    :   To print the calender of the month and year entered
 * @author      :   Aditi Pal
 * @version     :   1.0
 * @since       :   26-08-2019
*******************************************************************************/

/*
* @describe var readline used to hold the readline-sync package instant/object
*/
var readline = require('readline-sync');

/*
* @describe var month used to hold the month entered by user.
*/
var month = readline.question("Enter month");
/*
* @describe var year used to hold the year entered by user.
*/
var year = readline.question("Enter year");

/*
* @describe var obj used to hold the utoility object
*/
var obj=require('../DS/utilityDS');
obj.printCalender(month,year);
