
var obj=require('../DS/utilityDS');
var readline=require('readline-sync');

var wordToBeSearched=readline.question("Enter the word to be searched");
console.log(obj.searchWordInLL(wordToBeSearched));

