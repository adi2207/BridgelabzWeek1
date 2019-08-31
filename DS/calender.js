var readline=require('readline-sync');

var month=readline.question("Enter month");
var year=readline.question("Enter year");

var daysOfWeek=['Su','M','T','W','Th','F','Sa'];
var heading='Javascript Calender';
var months=['January','February','March','April','May','June','July','August','September','October','Novermber','December'];
var calenderStartsFrom=require('../Utility/utilityForAlgos').dayOfWeek(month,1,year);

function printCalender(){
    console.log(heading);
    console.log(months[month-1]+" "+year);
    //console.log(daysOfWeek);
    //process.stdout.write(daysOfWeek);
}
printCalender();
