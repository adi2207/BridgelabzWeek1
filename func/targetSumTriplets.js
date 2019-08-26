


var inputObj2= require('../Utility/input');
var n=inputObj2.getReadlineInput();

var inputObj= require('../Utility/arrayInput');
var arr=inputObj.getArray(n);

function sumOfTriplets(n,arr){
    var count=0;
    for(var i=0;i<n-2;i++){
        for(var j=i+1;j<n-1;j++){
            for(var k=j+1;k<n;k++){
                if((parseInt(arr[i])+parseInt(arr[j])+parseInt(arr[k]))==0) //default values string form mein jati hain
                {
                    console.log(arr[i]+" "+arr[j]+" "+arr[k]);
                    count++;
                }
            }
        }
    }
    return count;
}

var count=sumOfTriplets(n,arr);
console.log(count);
