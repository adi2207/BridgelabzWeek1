
var obj=require('../DS/utilityDS');
var readline=require('readline-sync');

var wordToBeSearched=readline.question("Enter the word to be searched");
console.log(obj.searchWordInLL(wordToBeSearched));

// var LinkedList =require('../DS/DataStructures/LinkedList');
// var LL=new LinkedList();
// LL.add(5);
// LL.add(6);
// LL.add(7);
// LL.add(8);
// //LL.pop();

// LL.printList();