const assert = require('chai').assert;
const app = require('../../func/couponCount');

describe('Prog', function () {
    it('should return number type', function () {
        let result = app.getRandomInt(0,10);
        assert.typeOf(result, 'number');
    });
    it('should return an integer between 0 and 9 including both', function () {
        let result = app.getRandomInt(0,10);
        assert.isAtLeast(result,0);
        assert.isAtMost(result,9);
    });
    it('should return atleast 8 attempts to generate 8 coupons', function () {
        let result = app.findCouponCount(8);
        assert.isAtLeast(result,8);
    });
    it('there can be only max 10 diff coupons, input val should be max 10 ', function () {
        let result = app.findCouponCount(11);
        assert.equal(result,-1);
    });
});