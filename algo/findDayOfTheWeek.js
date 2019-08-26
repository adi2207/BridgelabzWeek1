


//days of the week defined as 0 for sunday,1 for monday ....
//y0 = y − (14 − m) / 12
//x = y0 + y0/4 − y0/100 + y0/400
//m0 = m + 12 × ((14 − m) / 12) − 2
//d0 = (d + x + 31m0/ 12) mod 7

function intDev(n1, n2){
    return (n1-(n1%n2))/n2;
 }
function dayOfWeek(m,d,y){
    var k=14-m;
    var y0 = y-intDev(k,12);
    var x = y0 + intDev(y0,4)-intDev(y0,100) + intDev(y0,400); 
    var m0 = m-2+((intDev(k,12))*12);
    var i=31*m0;
    var dnew = intDev(i,12);
    var dnewnew=parseInt(dnew)+parseInt(d)+parseInt(x);
    var d0=dnewnew%7;
    return d0;
}
var obj = require('../Utility/input');
var m= obj.getReadlineInput();
var d= obj.getReadlineInput();
var y= obj.getReadlineInput();


console.log(dayOfWeek(m,d,y));


