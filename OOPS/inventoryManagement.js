const fs = require('fs');

let rawdata = fs.readFileSync('items.json');    // raw data in the form of hexcodes
let items = JSON.parse(rawdata);                //items is a javascript obj
var inventoryPrice=new Array(3);
for(var i=0;i<3;i++){
    items[i].inventoryValue=(items[i].weight)*(items[i].priceperkg);
}
let data = JSON.stringify(items);      //converts items object to data string          
fs.writeFileSync('blank.json',data);            //writes string to a json file


