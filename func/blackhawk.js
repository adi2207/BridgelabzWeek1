var readline = require('readline-sync');
var T = readline.question('Enter no of test cases T');
while (T > 0) {
    var N = readline.question('Enter length of the array');
    var Q = readline.question('Enter number of queries for each array');
    var array = new Array(N);
    var query = new Array(Q);

    for (var i = 0; i < N; i++) {
        array[i] = readline.question('Enter values in the array');
    }
    for (var i = 0; i < Q; i++) {
        query[i] = readline.question('Enter values in the query array');
    }
    for (var i = 0; i < Q; i++) {
        for (var j = 0; j < N; j++) {
            if (array[j] < array[query[i]]) {
                array[j] = 0;
            }
        }
        console.log(array)
    }
    T--;
}