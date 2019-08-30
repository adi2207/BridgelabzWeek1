module.exports.monthlyPayment = function (P, R, Y) {
    var r = R / 1200;
    var n = 12 * Y;
    var temp = (1 + parseFloat(r));
    var tempnew = Math.pow(temp, -n);
    var payment = (P * r) / (1 - tempnew);
    return payment;
}

module.exports.sqrt = function (c) {
    var t = c;
    var epsilon = Math.pow(10, -15);
    while (Math.abs(t - (c / t)) > epsilon * t) {
        t = ((c / t) + parseFloat(t)) / 2;
    }
    return t;
}

module.exports.toBinary = function (decimalNo) {
    //ensure padding to represent 4 byte string / 32 bits string
    var num = 0;
    var i = 0;
    while (decimalNo > 0) {
        var r = decimalNo % 2;
        decimalNo = parseInt(decimalNo / 2);
        num = num + (r * Math.pow(10, i));
        i++;
    }
    return num;
}

function intDev(n1, n2) {
    return (n1 - (n1 % n2)) / n2;
}
module.exports.dayOfWeek=function(m, d, y) {
    var k = 14 - m;
    var y0 = y - intDev(k, 12);
    var x = y0 + intDev(y0, 4) - intDev(y0, 100) + intDev(y0, 400);
    var m0 = m - 2 + ((intDev(k, 12)) * 12);
    var i = 31 * m0;
    var dnew = intDev(i, 12);
    var dnewnew = parseInt(dnew) + parseInt(d) + parseInt(x);
    var d0 = dnewnew % 7;
    return d0;
}

