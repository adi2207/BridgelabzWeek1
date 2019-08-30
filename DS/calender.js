var readline=require('readline-sync');

var month=readline.question("Enter month");
var year=readline.question("Enter year");

//var daysOfWeek=['Su','M','T','W','Th','F','Sa'];

var calenderStartsFrom=require('../Utility/utilityForAlgos').dayOfWeek(month,1,year);
