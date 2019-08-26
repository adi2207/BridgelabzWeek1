// finding the area of a circle
// this is a helper program to calculate topwatch time i.e. prog 15

const pi = 3.14 // content in global scope of input file wont be accessible in prog15

module.exports.circleArea = function (r) {
    return pi * r * r;
}