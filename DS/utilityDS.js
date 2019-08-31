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

module.exports.countNoOfBSTs = function (nodeCount) {
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

module.exports.primeNoBetween0And1000 = function () {
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

