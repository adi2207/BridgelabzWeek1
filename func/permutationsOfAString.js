function rec_permutations(word) {

	var arr=word.split("");
	console.log(arr);
	var perm= new Array();
	var start="";
	for(var i=0;i<word.length;i++){
		for(var j=0;j<i;j++){
			arr[i]
		}
	}

	//for(var i=0;i<word.length;i++){
	//	swap(word[i],word[0]);
	//}
	// bring each letter to first place and then recursively gen all permutaions of the remaining tring
}

//function itr_permutations(string) {
//	for ()
//}
var readline = require('readline-sync');
var word = readline.question("input x");



rec_permutations(word);
//itr_permutations(x, y);
