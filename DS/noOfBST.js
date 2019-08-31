var readline=require('readline-sync');
var obj=require('../DS/utilityDS');

var n=parseInt(readline.question("Enter nodecount"));

console.log(obj.countNoOfBSTs(n));