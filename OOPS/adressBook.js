function readFile(filename){
    let rawdata = fs.readFileSync(filename);
    var array = JSON.parse(rawdata);
    return array;
}
function writeFile(array,fileName){
    let data = JSON.stringify(array);
    fs.writeFileSync(fileName, data);
}
class addressBook{
    createNewAddressBook(addressBookId,name){
        this.addressBookId=addressBookId;
        this.name=name;
        return this;
    }
    closeAddressBook(){
        //CLOSE
    }
    openAddressBook(){
        //OPEN
    }
    saveAddressBookToFile(){
        //SAVE,SAVEAS
    }
    //QUIT closes all open address books
}
class addressBookMember{
    addMember(memberId,firstName,lastName,address,city,state,zip,phoneNo,addressBookId){
        this.firstName=firstName;
        this.lastName=lastName;
        this.memberId=memberId;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneNo=phoneNo;
        this.addressBookId=addressBookId;
        return this;
    }
    deleteMember(memberIdToBeFound,defaultAddressBook){
        var len=defaultAddressBook.length;
        for(var i=0;i<len;i++){
            if(defaultAddressBook[i].memberId==memberIdToBeFound)
            defaultAddressBook.splice(i,1);
        }
        return defaultAddressBook;
    }
    searchMember(memberIdToBeSearched){
        
    }
    editMember(){

    }
    sortEntriesByLastName(){

    }
    printInMailingLabelFormat(){

    }
    sortEntriesByZip(){

    }

}

module.exports={addressBookMember,addressBook}