const assert=require('chai').assert;
const adressBookMember=require('../../OOPS/adressBook').addressBookMember;
var adressBookMemberObj=new adressBookMember()
let result=adressBookMemberObj.searchMember(1,[
    {
      "firstName": "Akansha",
      "lastName": "Arora",
      "memberId": "1",
      "address": "Sai",
      "city": "Chembur",
      "state": "Maha",
      "zip": "201308",
      "phoneNo": "9650152533",
      "addressBookId": "0"
    },
    {
      "firstName": "Lo",
      "lastName": "Arbaz",
      "memberId": "2",
      "address": "SaiS",
      "city": "Bandra",
      "state": "Maharashtra",
      "zip": "201309",
      "phoneNo": "9659052533",
      "addressBookId": "0"
    }
  ]);
describe('Prog',function(){
    it('should return ', function(){
        assert.equal(result,{
            "firstName": "Akansha",
            "lastName": "Arora",
            "memberId": "1",
            "address": "Sai",
            "city": "Chembur",
            "state": "Maha",
            "zip": "201308",
            "phoneNo": "9650152533",
            "addressBookId": "0"
          });
    });
});