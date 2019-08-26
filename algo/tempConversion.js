function temperatureConversion(tempUnit,givenTemp){
    if(tempUnit=='f'||tempUnit=='F'){
        var outputTemp=(givenTemp-32)*0.555555556;
    }
    else if(tempUnit=='c'||tempUnit=='C'){
        var outputTemp=(givenTemp*1.8)+32;

    }
    return outputTemp;
}

var readline = require('readline-sync');
var tempUnit = readline.question("Enter the unit of temp, either f/c?");
var givenTemp= readline.question("enter the temperature");

console.log(temperatureConversion(tempUnit,givenTemp));
