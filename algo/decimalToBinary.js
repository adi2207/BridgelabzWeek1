var obj=require('../Utility/utilityForAlgos');
var obj2=require('../Utility/input');

var decimalNo=obj2.getReadlineInput();
var binaryNum=obj.toBinary(decimalNo);
console.log(String(binaryNum).padStart(32, '0'));


