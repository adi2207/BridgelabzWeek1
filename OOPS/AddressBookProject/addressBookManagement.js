
var input=require('./input');
var fileManager=require('../AddressBookProject/fileManager');
var addressBook=require('./addressBook').addressBook;
var addressBookMember=require('./addressBookMember').addressBookMember;

var inputObj = new input.Input();
var fileManagerObj = new fileManager.FileManager();

class AddressBookManager {
    createAddressBook() {
        
        var addressBookArray = fileManagerObj.readFile('./jsonfiles/addressBookList.json');
        var addressBookInputObj = inputObj.getInputForAddressBook();
        let addressBookObj = new addressBook();
        addressBookObj.bookName =addressBookInputObj.name;
        addressBookObj.id = addressBookInputObj.addressBookId;
        addressBookArray.push(addressBookObj);
        fileManagerObj.writeFile(addressBookArray, './jsonfiles/addressBookList.json');
        console.log("NEW ADDRESS BOOK CREATED");
    }
    createNewMember() {
        console.log("ENTER DETAILS TO ADD NEW MEMBER TO DEFAULT ADDRESS BOOK")
        var defaultAddressBook = fileManagerObj.readFile('./jsonfiles/defaultAddressBook.json');
        var addressBookInputObjMember = inputObj.getInputForAddressBookMember();
        let addressBookMemberObj = new addressBookMember();
        addressBookMemberObj.fname = addressBookInputObjMember.firstName;
        addressBookMemberObj.lname = addressBookInputObjMember.lastName;
        addressBookMemberObj.id = addressBookInputObjMember.memberId;
        addressBookMemberObj.adress = addressBookInputObjMember.address;
        addressBookMemberObj.cityy = addressBookInputObjMember.city;
        addressBookMemberObj.statee = addressBookInputObjMember.state;
        addressBookMemberObj.zipp = addressBookInputObjMember.zip;
        addressBookMemberObj.phone = addressBookInputObjMember.phoneNo;
        addressBookMemberObj.adressBookId = addressBookInputObjMember.addressBookId;

        defaultAddressBook.push(addressBookMemberObj);
        fileManagerObj.writeFile(defaultAddressBook, './jsonfiles/defaultAddressBook.json');
        console.log("MEMBER ADDED");
    }
    deleteMember() {
        console.log("ENTER DETAILS OF THE MEMBER TO BE DELETED FROM THE DEFAULT ADDRESS BOOK");

        var defaultAddressBook = fileManagerObj.readFile('./json/defaultAddressBook.json')
        var memberIdToBeFound = inputObj.getIdInput();
        var obj = new addressBookMember();
        var defaultAddressBook = obj.deleteMember(memberIdToBeFound, defaultAddressBook);

        fileManagerObj.writeFile(defaultAddressBook, './json/defaultAddressBook.json');
        console.log("MEMBER DELETED");
    }
    searchMember() {
        console.log("ENTER DETAILS OF THE MEMBER TO BE SEARCHED FROM THE DEFAULT ADDRESS BOOK");
        var defaultAddressBook = fileManagerObj.readFile('./jsonfiles/defaultAddressBook.json')
        var memberIdToBeFound = inputObj.getIdInput();
        var obj = new addressBookMember();
        var objFound = obj.searchMember(memberIdToBeFound, defaultAddressBook);
        if (objFound) {
            console.log("MEMBER FOUND");
            console.log(objFound);
        }
        else {
            console.log("MEMBER NOT FOUND");
        }
    }
    editMember() {
        console.log("ENTER DETAILS OF THE MEMBER TO BE EDITED FROM THE DEFAULT ADDRESS BOOK");

        var defaultAddressBook = fileManagerObj.readFile('./json/defaultAddressBook.json')
        var memberIdToBeFound = inputObj.getIdInput();
        var obj = new addressBookMember();
        var objFound = obj.searchMember(memberIdToBeFound, defaultAddressBook);
        if (objFound) {
            console.log("MEMBER FOUND");
            console.log(objFound);
            var memberId = objFound.memberId;
            var propertyToBeEdited = inputObj.getPropertyToBeEditedInput();
            var newPropertyValue = inputObj.getNewPropertyValueInput();
            defaultAddressBook = obj.editMember(memberId, defaultAddressBook, propertyToBeEdited, newPropertyValue);
            fileManagerObj.writeFile(defaultAddressBook, './json/defaultAddressBook.json');
            console.log("MEMBER EDITED");
        }
        else
            console.log("MEMBER NOT FOUND");

    }
    sortMembersByLastName() {
        console.log("FUNCTION TO SORT THE DEFAULT ADDRESS BOOK");

        var defaultAddressBook = fileManagerObj.readFile('./json/defaultAddressBook.json')

        var obj = new addressBookMember();
        var objArray = obj.sortEntriesByLastName(defaultAddressBook);
        fileManagerObj.writeFile(objArray, './json/sortedAddressBook.json');
        console.log("MEMBER SORTED ON THE BASIS OF LASTNAME");

    }
    printInMailingLabelFormat() {
        console.log("PRINTING THE DEFAULT ADDRESS BOOK IN MAILING LABEL FORMAT\n");
        var defaultAddressBook = fileManagerObj.readFile('./json/defaultAddressBook.json');

        var obj = new addressBookMember();
        obj.printInMailingLabelFormat(defaultAddressBook);
    }
    sortMembersByZip() {
        //ADD THE SECONDARY CRITERIA AS WELL
        console.log("FUNCTION TO SORT THE DEFAULT ADDRESS BOOK");

        var defaultAddressBook = fileManagerObj.readFile('./json/defaultAddressBook.json');

        var obj = new addressBookMember();
        var objArray = obj.sortEntriesByZip(defaultAddressBook);
        fileManagerObj.writeFile(objArray, './json/sortedAddressBook.json');
        console.log("MEMBER SORTED ON THE BASIS OF ZIP");

    }
}
const addressBookManagerObj = new AddressBookManager()

//addressBookManagerObj.createAddressBook();
//addressBookManagerObj.createNewMember();
addressBookManagerObj.searchMember();
//addressBookManagerObj.editMember();
//addressBookManagerObj.sortMembersByLastName();
//addressBookManagerObj.sortMembersByZip();
//addressBookManagerObj.printInMailingLabelFormat();
//addressBookManagerObj.deleteMember()

