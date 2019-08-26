



var readline = require('readline-sync');
var a = readline.question("input a");
var b = readline.question("input b");
var c = readline.question("input c");

var obj=require('../mochatest/utilityForFunc');
var roots = obj.quadRoots(a, b, c);

console.log("the roots are", roots[0], roots[1]);


