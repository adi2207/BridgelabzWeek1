const assert=require('chai').assert;
const apps=require('../utilityForFunc');
var name='aditi';
let result=apps.helloUser(name);
describe('Prog',function(){
    it('should return string type', function(){
        assert.typeOf(result,'string');
    });
    it('should return aditi', function(){
        assert.equal(result,'aditi');
    });
});