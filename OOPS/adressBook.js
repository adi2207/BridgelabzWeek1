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
    searchMember(memberIdToBeSearched,defaultAddressBook){
        var bool=false;
        var len=defaultAddressBook.length;
        for(var i=0;i<len;i++){
            if(defaultAddressBook[i].memberId==memberIdToBeSearched){
                bool=true;
                return defaultAddressBook[i];
            }
        }
        return bool;
    }

    editMember(memberIdToBeSearched,defaultAddressBook,propertyToBeEdited,newPropertyValue){
        var len=defaultAddressBook.length;
        for(var i=0;i<len;i++){
            if(defaultAddressBook[i].memberId==memberIdToBeSearched){
                defaultAddressBook[i][propertyToBeEdited]=newPropertyValue;
            }
        }
        return defaultAddressBook;
    }

    sortEntriesByLastName(defaultAddressBook){
        var len=defaultAddressBook.length;
        var array=[];
        var finalArray=[]
        for(var i=0;i<len;i++){
            array.push(defaultAddressBook[i].lastName);
        }
        for(var i=0;i<len;i++){
            array.sort();
        }
        for(var i=0;i<len;i++){
            for(var j=0;j<len;j++){
                if(defaultAddressBook[j].lastName==array[i]){
                    finalArray.push(defaultAddressBook[j]);
                }
            }
        }
        return finalArray;
    }
    printInMailingLabelFormat(){
        //COMPLETE THIS

    }
    sortEntriesByZip(defaultAddressBook){
        var len=defaultAddressBook.length;
        var array=[];
        var finalArray=[]
        for(var i=0;i<len;i++){
            array.push(defaultAddressBook[i].zip);
        }
        for(var i=0;i<len;i++){
            array.sort();
        }
        for(var i=0;i<len;i++){
            for(var j=0;j<len;j++){
                if(defaultAddressBook[j].zip==array[i]){
                    finalArray.push(defaultAddressBook[j]);
                }
            }
        }
        return finalArray;
    }

}

module.exports={addressBookMember,addressBook}