const assert = require('chai').assert;
const app = require('../utilityForFunc');

describe('Prog', function () {
    it('should return array type', function () {
        var a = 4;
        var b = 5;
        var c = 4;
        let result = app.quadRoots(4,5,4);
        assert.typeOf(result, 'array');
    });
    it('should return an array of undefined', function () {
        var a = 4;
        var b = 5;
        var c = 4;
        let result = app.quadRoots(4,5,4);
        assert.equal(result[0],undefined);
    });
    it('should return an array of undefined', function () {
        var a = 4;
        var b = 5;
        var c = 4;
        let result = app.quadRoots(4,5,4);
        assert.equal(result[1],undefined);
    });
    it('should return an array of -2', function () {
        var a = 1;
        var b = 5;
        var c = 6;
        let result = app.quadRoots(1,5,6);
        assert.equal(result[0],-2);
    });
    it('should return an array of -3', function () {
        var a = 1;
        var b = 5;
        var c = 6;
        let result = app.quadRoots(1,5,6);
        assert.equal(result[1],-3);
    });
    it('should return an array of -1', function () {
        var a = 2;
        var b = 4;
        var c = 2;
        let result = app.quadRoots(2,4,2);
        assert.equal(result[0],-1);
    });
    it('should return an array of -1', function () {
        var a = 1;
        var b = 5;
        var c = 6;
        let result = app.quadRoots(2,4,2);
        assert.equal(result[1],-1);
    });
});