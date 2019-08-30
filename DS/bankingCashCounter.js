class Queue {

    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

    front() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
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

var readline = require('readline-sync');
function bankingCashCounter() {
    var queue = new Queue();
    var accountBalance=500;
    while(1) {
        var transactionType = readline.question("Enter 1 for withdraw/Enter 2 for Deposit/ Press 0 to end process");
        if(transactionType==0){
            break;
        }
        var transactionAmount = readline.question("Enter amount");

        queue.enqueue(transactionAmount);
        if (transactionType == 1) {
            accountBalance = accountBalance - transactionAmount;
        }
        if (transactionType == 2) {
            accountBalance = parseInt(accountBalance) + parseInt(transactionAmount);
        }
        queue.dequeue();
    }
    return accountBalance;

}
console.log(bankingCashCounter());


