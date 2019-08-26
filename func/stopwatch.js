
var readline = require('readline-sync');
var r = readline.question("enter the radius of the circle");
const start = Date.now()
var circle = require('../Utility/circle'); //if the file to be imported i.e. input.js is in the same folder as the prog then require('./input')
var area = circle.circleArea(r);
const end = Date.now();
var timeelapsed = end - start;
console.log("the are of the circle is", area);
console.log("time elapsed in the processs is", timeelapsed)


