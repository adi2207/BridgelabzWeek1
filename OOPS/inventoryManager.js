const fs = require('fs');

class Inventory{
    readFile(filename){
        let rawdata = fs.readFileSync(filename);    
        let array = JSON.parse(rawdata);  
        return array;
    }
    writeFile(filename,array){
        let data = JSON.stringify(array);             
        fs.writeFileSync(filename,data);
        return data;
    }
    calPrice(obj){
        return obj.weight*obj.priceperkg;
    }
}
        
function process(){
    var inventory=new Inventory()
    var objArray=inventory.readFile('items.json');
    for(var i=0;i<objArray.length;i++){
        objArray[i].inventoryPrice=inventory.calPrice(objArray[i]);
    }
    var jsonString=inventory.writeFile('output.json',objArray);
    console.log(jsonString);
}

process();