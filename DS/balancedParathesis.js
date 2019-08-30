var Stack = require('stackjs');
var rl=require('readline-sync');

// function createEmptyStack() {
//     var Stack = require('stackjs');
//     var stack = new Stack();
//     return stack;
// }

function isBalanced(expression) {
    var stack = new Stack();
    
    for(var i=0;i<expression.length;i++){
        if(expression[i]=='('){
            stack.push(expression[i]);
        }
        if(expression[i]==')'){
            if(stack.size()!=0)
                stack.pop();
            else 
                return false
        }
        
    }
    if(stack.isEmpty())
        return true;
    else 
        return false;
}

var expression =rl.question("insert the expression");
console.log(isBalanced(expression));