
/******************************************************************************
 * Execution    :   default node            terminal> ap.js
 * 
 * Purpose      :   Practising basics of javascript
 * 
 * @description
 * 
 * @file        :   ap.js
 * @overview    :   Contains basic operations in javascript
 * @author      :   Aditi Pal
 * @version     :   1.0
 * @since       :   20-08-2019
*******************************************************************************/
var v;
v = 10;
var b = "10";
console.log(v);
console.log(typeof v);
if (v == b) {
	console.log("values are equal");	//this gets printed 10="10" typeconverted and then checked
}

var obj = {};
obj.prop = "hello";
console.log(obj);

var obj2 = {
	"prop1": "table",
	"prop2": 123
};
console.log(obj2);
//access the properties via obj.prop1 or via obj["prop1"]
// === compares conventionally, w/o type conversion

var array = [10, 20, 30];
console.log(array[1]);
console.log(array.length);

//in javascript function is a value, it can be assigned to a variable, this is diff from returning a value and assigning it to a variable
//this property of functions is called first class functions

//this method of declaring functions is function expression
var sumval = function sum() {
	console.log("sum is this");
};

//calling the above function
sumval();

//this method of declaring functions is anonymous function expression
var sumval2 = function () {		//we dont give a name to the function, we just name the variable
	console.log("sumval2 is this");
};

//calling the above function
sumval2();


//this method of declaring function is called function declaration 
function sum2() {
	console.log("sum2 is this");
}

//callling sum2
sum2();
