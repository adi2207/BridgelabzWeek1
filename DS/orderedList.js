var readline=require('readline-sync');
var fs=require('fs');
var file=fs.readFileSync('fileContainingNumbers.txt','utf-8');
var numArray=file.split(',');

