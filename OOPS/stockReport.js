
var stockPortfolio=require('./stockHelper').stockPortfolio;
var stock=require('./stockHelper').stock;
var takeInput=new stockPortfolio();
console.log(takeInput.takeUserInput());

var giveOutput=new stock();
console.log(giveOutput.calStockValues());

