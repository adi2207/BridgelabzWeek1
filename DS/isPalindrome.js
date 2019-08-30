class Dequeue {

    constructor() {
        this.items = [];
    }

    addRear(element) {
        this.items.push(element);
    }

    addFront(element) {
        this.items.unshift(element);
    }

    RemoveFront() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }
    RemoveBack() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.pop();
    }

    front() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }
    rear() {
        if (this.isEmpty())
            return "No elements in Queue";
        var length=this.items.length;
        return this.items[length-1];
    }
    isEmpty() {
        return this.items.length == 0;

    }
    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

var readline=require('readline-sync');
var word=readline.question("input word");
function isPalindrome(word){
    var wordArray=word.split("");
    var dequeue = new Dequeue();
    for(var i=0;i<wordArray.length;i++){
        dequeue.addRear(wordArray[i]);
    }
    var bool=true;
    while(!dequeue.isEmpty()){
        if(dequeue.front()==dequeue.rear())
        {
            dequeue.RemoveFront();
            dequeue.RemoveBack();
        }
        else if(dequeue.front()!=dequeue.rear())
        {
            bool =false;
            break;
        }
    }
    return bool;
    //console.log(dequeue.printQueue());
}
console.log(isPalindrome(word));
// dequeue.addFront(4);
// dequeue.addFront(5);
// dequeue.addFront(6);
// dequeue.addRear(7);
// console.log(dequeue.printQueue());
// dequeue.RemoveFront();
// console.log(dequeue.printQueue());

// dequeue.RemoveBack();
// console.log(dequeue.printQueue());

// console.log(dequeue.front());
// console.log(dequeue.rear());
// var words ='aditi';
// var arr=words.split("");
// console.log(arr);