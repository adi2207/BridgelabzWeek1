//days of the week defined as 0 for sunday,1 for monday ....
//y0 = y − (14 − m) / 12
//x = y0 + y0/4 − y0/100 + y0/400
//m0 = m + 12 × ((14 − m) / 12) − 2
//d0 = (d + x + 31m0/ 12) mod 7

var obj = require('../Utility/input');
var m = obj.getReadlineInput();
var d = obj.getReadlineInput();
var y = obj.getReadlineInput();

var obj2=require('../Utility/utilityForAlgos');
var output=obj2.dayOfWeek(m,d,y);
console.log(output);




