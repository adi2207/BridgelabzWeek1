
function readFile(){
    const fs = require('fs')

    fs.readFile('textDocument.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(data);
    })

}

//readFile();

 var Stack= require('stackjs');
 var stack=new Stack();
 stack.push(5);
 stack.push(4);
 stack.push(3);

 console.log(stack);


