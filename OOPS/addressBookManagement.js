var addressBookMember = require('../OOPS/adressBook').addressBookMember;
var addressBook = require('../OOPS/adressBook').addressBook;
var readline = require('readline-sync');
const fs = require('fs');

function readFile(filename) {
    let rawdata = fs.readFileSync(filename);
    var array = JSON.parse(rawdata);
    return array;
}
function writeFile(array, fileName) {
    let data = JSON.stringify(array,null,2);
    fs.writeFileSync(fileName, data);
}

function createAddressBook() {
    let rawdata = fs.readFileSync('addressBookList.json');
    var addressBookArray = JSON.parse(rawdata);
    var i = addressBookArray.length;

    addressBookArray[i] = new addressBook();
    var name = readline.question("Enter the name of the address book");
    var addressBookId = readline.question("Enter the id of the address book");
    addressBookArray[i].createNewAddressBook(addressBookId, name);
    i++;

    let data = JSON.stringify(addressBookArray);
    fs.writeFileSync('addressBookList.json', data);
    console.log("NEW ADDRESS BOOK CREATED");
}
function createNewMember() {
    console.log("ENTER DETAILS TO ADD NEW MEMBER TO DEFAULT ADDRESS BOOK")

    var addressBookArray = readFile('addressBookList.json');
    var addressBookId = addressBookArray[0].addressBookId;

    var defaultAddressBook = readFile('defaultAddressBook.json')
    var len = defaultAddressBook.length;
    defaultAddressBook[len] = new addressBookMember();

    var memberId = readline.question("Enter the id of the member ");
    var firstName = readline.question("Enter the first name of the member ");
    var lastName = readline.question("Enter the last name of the member ");
    var address = readline.question("Enter the address of the member ");
    var city = readline.question("Enter the city of the member ");
    var state = readline.question("Enter the state of the member ")
    var zip = readline.question("Enter the zip of the member ")
    var phoneNo = readline.question("Enter the phone number of the member ")
    defaultAddressBook[len].addMember(memberId, firstName, lastName, address, city, state, zip, phoneNo, addressBookId);
    len++;
    writeFile(defaultAddressBook, 'defaultAddressBook.json');
    console.log("MEMBER ADDED");
}
function deleteMember() {
    console.log("ENTER DETAILS OF THE MEMBER TO BE DELETED FROM THE DEFAULT ADDRESS BOOK");

    var defaultAddressBook = readFile('defaultAddressBook.json')

    var memberIdToBeFound = readline.question("Enter the id of the member to be deleted ");

    var obj = new addressBookMember();
    var defaultAddressBook = obj.deleteMember(memberIdToBeFound, defaultAddressBook);

    writeFile(defaultAddressBook, 'defaultAddressBook.json');
    console.log("MEMBER DELETED");
}
function searchMember() {
    console.log("ENTER DETAILS OF THE MEMBER TO BE SEARCHED FROM THE DEFAULT ADDRESS BOOK");

    var defaultAddressBook = readFile('defaultAddressBook.json')

    var memberIdToBeFound = readline.question("Enter the id of the member to be searched ");

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
function editMember() {
    console.log("ENTER DETAILS OF THE MEMBER TO BE EDITED FROM THE DEFAULT ADDRESS BOOK");

    var defaultAddressBook = readFile('defaultAddressBook.json')

    var memberIdToBeFound = readline.question("Enter the id of the member to be edited ");

    var obj = new addressBookMember();
    var objFound=obj.searchMember(memberIdToBeFound,defaultAddressBook);
    if (objFound){
        console.log("MEMBER FOUND");
        console.log(objFound);
        var memberId=objFound.memberId;
        var propertyToBeEdited = readline.question("Enter the property of the member that needs to be edited ");
        var newPropertyValue = readline.question("Enter the new value of that property ");
        defaultAddressBook=obj.editMember(memberId,defaultAddressBook,propertyToBeEdited,newPropertyValue);
        writeFile(defaultAddressBook, 'defaultAddressBook.json');
        console.log("MEMBER EDITED");
    }
    else
        console.log("MEMBER NOT FOUND");
        
}
function sortMembersByLastName() {
    //ADD THE SECONDARY CRITERIA FOR SORTING
    console.log("FUNCTION TO SORT THE DEFAULT ADDRESS BOOK");

    var defaultAddressBook = readFile('defaultAddressBook.json')

    var obj = new addressBookMember();
    var objArray=obj.sortEntriesByLastName(defaultAddressBook);
    writeFile(objArray, 'sortedAddressBook.json');
    console.log("MEMBER SORTED ON THE BASIS OF LASTNAME");
        
}
function printInMailingLabelFormat(){
    console.log("PRINTING THE DEFAULT ADDRESS BOOK IN MAILING LABEL FORMAT\n");
    var defaultAddressBook = readFile('defaultAddressBook.json');

    var obj = new addressBookMember();
    obj.printInMailingLabelFormat(defaultAddressBook);
}
function sortMembersByZip() {
    //ADD THE SECONDARY CRITERIA AS WELL
    console.log("FUNCTION TO SORT THE DEFAULT ADDRESS BOOK");

    var defaultAddressBook = readFile('defaultAddressBook.json');

    var obj = new addressBookMember();
    var objArray=obj.sortEntriesByZip(defaultAddressBook);
    writeFile(objArray, 'sortedAddressBook.json');
    console.log("MEMBER SORTED ON THE BASIS OF ZIP");
        
}


//createAddressBook();
//createNewMember();
//deleteMember()
//searchMember();
editMember();
//sortMembersByLastName();
//sortMembersByZip();
//printInMailingLabelFormat();