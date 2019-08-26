function returnChange(amount,p,notes){

    var denominations=[1, 2, 5, 10, 50, 100, 500, 1000];

    if(amount==0){
        return notes;
    }
    if(amount-denominations[p]>=0){
        console.log(denominations[p]+" ");
        return returnChange(amount-denominations[p],p,notes+1);
    }
    if(amount-denominations[p]<0){
        return returnChange(amount,p-1,notes);
    }
}

var obj = require('../Utility/readlineInput');
var amount= obj.getReadlineInput();

var notes=0;
console.log(returnChange(amount,7,notes));