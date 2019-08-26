
/******************************************************************************
 * Execution    :   default node            terminal> node gambler.js
 * 
 * Purpose      :   To take username as input and return hello, username how are you?
 * 
 * @description
 * 
 * @file        :   gambler.js
 * @overview    :   To take username as input and return hello, username how are you?
 * @author      :   Aditi Pal
 * @version     :   1.0
 * @since       :   20-08-2019
*******************************************************************************/
var obj1 = require('../Utility/input');
var obj = require('../mochatest/utilityForFunc');

var username = obj1.getReadlineInput();
obj.helloUser(username);