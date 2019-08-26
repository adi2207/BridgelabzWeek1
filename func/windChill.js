var inputObj=require('../Utility/input');

console.log("input v");
var v=inputObj.getReadlineInput();
console.log("input t");
var t=inputObj.getReadlineInput();
if((t<=50 && t>=-50)&&(v<=120&&v>=3)){
    var w=35.74+(0.6215*t)+((0.4275*t-35.75)*(Math.pow(v,0.16)));
    console.log(w);
}
else{
    console.log("invalid input");
}
