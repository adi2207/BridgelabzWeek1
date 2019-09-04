
/*
* @describe var readline used to hold the readline-sync package instant/object
*/

var readline = require('readline-sync');

/*
* @description function used to check whether the input number is prime or not
*/

function isPrime(number) {
    if (number == 2 || number == 3) {
        return true;
    }
    if (number % 2 == 0) {
        return false;
    }
    var sqrtt = parseInt(Math.sqrt(number)) + 1;
    for (var i = 3; i < sqrtt; i += 2) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
/*
* @description function to check whether the given expression has balanced paranthesis or not
*/

module.exports.isBalanced = function (expression) {
    /*
    * @describe var Stack used to hold the stackjs class instant/object
    */
    var Stack = require('stackjs');
    /*
    * @describe var stack used to create a new stack
    */
    var stack = new Stack();

    for (var i = 0; i < expression.length; i++) {
        if (expression[i] == '(') {
            stack.push(expression[i]);
        }
        if (expression[i] == ')') {
            if (stack.size() != 0)
                stack.pop();
            else
                return false
        }

    }
    if (stack.isEmpty())
        return true;
    else
        return false;
}

/*
* @describe function to countthe no of BSTs that can be created using numbers 1to n
*/
module.exports.countNoOfBSTs = function (nodeCount) {
    /*
    * @describe var T storres all the values of number of BSTs possible
    */
    var T = [];
    T[0] = 1;
    T[1] = 1;
    for (var i = 2; i <= nodeCount; i++) {
        T[i] = 0;
    }
    //console.log(T);
    for (var i = 2; i <= nodeCount; i++) {
        for (var j = 0; j < i; j++) {
            T[i] = parseInt(T[i]) + (parseInt(T[j]) * parseInt(T[i - j - 1]));
            //console.log(T[i]);

        }
    }
    return T[nodeCount];
}
/*
* @describe function to return the prime numbers between 0 and 1000 
*/

function primeNoBetween0And1000() {
    var arr = new Array();
    var j = 0;
    for (var i = 2; i <= 1000; i++) {
        if (isPrime(i)) {
            arr[j] = i;
            j++;
        }
    }
    return arr;
}

/*
* @describe function to print the prime numbers ina 2d array
*/
module.exports.print2dPrime = function () {
    var i, j = 0, r = 0, c = 0, flag = 0, arr = [], arr2d = [], k = -1;
    arr = this.primeNoBetween0And1000();
    for (i = 0; i < 1000; i = i + 100) {
        k++;
        arr2d[k] = [];
        while (arr[j] < i + 100) {
            arr2d[k][c] = arr[j];
            c++;
            j++;
        }
    }
    return arr2d;
}
/*
* @description function printCalender to print the calender of the user suplied month and year.
*/
module.exports.printCalender = function (month, year) {
    /*
    * @describe var show used to hold the util class object
    */
    var show = require('util');
    /*
    * @describe var heading used to hold the heading of the calender
    */
    var heading = 'Javascript Calender';
    /*
    * @describe var months used to hold the months of a year
    */
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novermber', 'December'];
    /*
    * @describe var noOfDaysInEachMonth used to hold the number of days in each month
    */
    var noOfDaysInEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    /*
    * @describe var calenderStartsFrom stores the day of the week fro m which the calender starts 
    */
    var calenderStartsFrom = require('../Utility/utilityForAlgos').dayOfWeek(month, 1, year);

    console.log(heading);
    console.log(months[month - 1] + " " + year);
    console.log(' Su  Mo  Tu  We  Th  Fr  Sa ');
    var count = 0;
    for (var j = 0; j < calenderStartsFrom; j++) {
        show.print("    ");
        count++;
    }
    for (var i = 1; i <= 9; i++) {
        show.print("  " + i + " ");
        count++;
        if (count % 7 == 0) {
            console.log();
        }
    }
    for (var i = 10; i <= noOfDaysInEachMonth[month - 1]; i++) {
        show.print(" " + i + " ");
        count++;
        if (count % 7 == 0) {
            console.log();
        }
    }
}

module.exports.printCalenderUsingQueueLL = function (month, year) {
    /*
    * @describe var show used to hold the util class object
    */
    var show = require('util');
    /*
    * @describe var heading used to hold the heading of the calender
    */
    var heading = 'Javascript Calender';
    /*
    * @describe var months used to hold the months of a year
    */
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novermber', 'December'];
    /*
    * @describe var noOfDaysInEachMonth used to hold the number of days in each month
    */
    var noOfDaysInEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    /*
    * @describe var QueueLL used to hold the Queue uisng LL class
    */
    var QueueLL = require('../DS/DataStructures/queueUsingLL');
    /*
    * @describe var dayQueue used to store the days of the week in a queue
    */
    var dayQueue = new QueueLL();
    
        dayQueue.enqueue(' Su');
        dayQueue.enqueue(' Mo');
        dayQueue.enqueue(' Tu');
        dayQueue.enqueue(' We');
        dayQueue.enqueue(' Th');
        dayQueue.enqueue(' Fr');
        dayQueue.enqueue(' Sa');

    /*
    * @describe var calenderStartsFrom stores the day of the week fro m which the calender starts 
    */
    var calenderStartsFrom = require('../Utility/utilityForAlgos').dayOfWeek(month, 1, year);

    console.log(heading);
    console.log(months[month - 1] + " " + year);
    console.log(dayQueue.printQueueLL());
    var count = 0;
    for (var j = 0; j < calenderStartsFrom; j++) {
        show.print("    ");
        count++;
    }
    for (var i = 1; i <= 9; i++) {
        show.print("  " + i + " ");
        count++;
        if (count % 7 == 0) {
            console.log();
        }
    }
    for (var i = 10; i <= noOfDaysInEachMonth[month - 1]; i++) {
        show.print(" " + i + " ");
        count++;
        if (count % 7 == 0) {
            console.log();
        }
    }
}
/*
* @description function bankingCahsCounter created to return the account balance of the cashier after a series of withdrawals/deposits by customers in a queue.
*/
module.exports.bankingCashCounter = function () {
    /*
    * @describe var Queue used to hold the Queue package instant/object
    */
    const Queue = require('../DS/DataStructures/Queue');

    /*
    * @describe var queue used to hold the new queue
    */
    var queue = new Queue();
    /*
    * @describe var accountBalance used to hold the innitial account balance of the cashier
    */
    var accountBalance = 500;
    while (1) {
        /*
        * @describe var transactionType used to store whether the current transacxtion is of withdrawal/deposit
        */
        var transactionType = readline.question("Enter 1 for withdraw/Enter 2 for Deposit/ Press 0 to end process");
        if (transactionType == 0) {
            break;
        }
        /*
        * @describe var transactionAmount used to store the current transacxtion is of what amount
        */
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
/*
        * @describe function isPalindrome to check whether the given word i a palindrome
        */
module.exports.isPalindrome = function (word) {
    /*
        * @describe var Dequeue used to import Dequeue class
        */
    var Dequeue = require('../DS/DataStructures/Dequeue');
    /*
        * @describe var Dequeue used to create a new queue
        */
    var dequeue = new Dequeue;
    /*
        * @describe var wordArray used to convert the input word into an array of letters
        */
    var wordArray = word.split("");

    /*
        * @describe adding the word into dequeue
        */
    for (var i = 0; i < wordArray.length; i++) {
        dequeue.addRear(wordArray[i]);
    }
    /*
        * @describe var bool used to store whether the word is a palindrome or not
        */
    var bool = true;
    while (!dequeue.isEmpty()) {
        if (dequeue.front() == dequeue.rear()) {
            dequeue.RemoveFront();
            dequeue.RemoveBack();
        }
        else if (dequeue.front() != dequeue.rear()) {
            bool = false;
            break;
        }
    }
    return bool;
}

module.exports.insertNumber = function(){
    var fs=require('fs');
    var file=fs.readFileSync('fileContainingNumbers.txt','utf-8');
    var numArray=file.split(',');
    var LinkedList=require('../DS/DataStructures/LinkedList');
    var LL=new Array(10);
    for(var i=0;i<10;i++){
         LL[i]=new LinkedList();
         LL[i].add(i);
    }
     for(var i=0;i<numArray.length;i++){
         var r=numArray[i]%10;
         LL[r].add(numArray[i]);
     }
     for(var i=0;i<LL.length;i++){
        LL[i].printList();  
    }
    return LL;
}

function readFile() {
    const fs = require('fs')
    var text = fs.readFileSync('textDocument.txt', 'utf-8');
    var textArray = text.split(' ');
    return textArray;
}

module.exports.searchWordInLL=function(wordToBeSearched) {
    var LinkedList = require('../DS/DataStructures/LinkedList');
    var LL = new LinkedList();
    var textArray = readFile();
    for (var i = 0; i < textArray.length; i++) {
        LL.add(textArray[i]);
    }
    var bool;
    if(LL.search(wordToBeSearched)){
        LL.remove(wordToBeSearched);
        bool=true;
    }
    else{
        LL.add(wordToBeSearched);
        bool=false;
    }
    LL.printList();
    return bool;
}
