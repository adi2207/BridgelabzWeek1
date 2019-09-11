class addressBookMember {

    get id() {
        return this.memberId;
    }
    set id(memberId) {
        this.memberId = memberId;
    }
    get fname() {
        return this.firstName;
    }
    set fname(firstName) {
        this.firstName = firstName;
    }
    get lname() {
        return this.lastName;
    }
    set lname(lastName) {
        this.lastName = lastName;
    }
    get adress() {
        return this.address;
    }
    set adress(address) {
        this.address = address;
    }
    get cityy() {
        return this.city;
    }
    set cityy(city) {
        this.city = city;
    }
    get statee() {
        return this.state;
    }
    set statee(state) {
        this.state = state;
    }
    get zipp() {
        return this.zip;
    }
    set zipp(zip) {
        this.zip = zip;
    }
    get phone() {
        return this.phoneNo;
    }
    set phone(phoneNo) {
        this.phoneNo = phoneNo;
    }
    get adressBookId() {
        return this.addressBookId;
    }
    set adressBookId(addressBookId) {
        this.addressBookId = addressBookId;
    }
    deleteMember(memberIdToBeFound, defaultAddressBook) {
        var len = defaultAddressBook.length;
        for (let i = 0; i < len; i++) {
            if (defaultAddressBook[i].memberId == memberIdToBeFound)
                defaultAddressBook.splice(i, 1);
        }
        return defaultAddressBook;
    }
    
    searchMember(memberIdToBeSearched, defaultAddressBook) {
        var bool = false;
        var len = defaultAddressBook.length;
        for (var i = 0; i < len; i++) {
            if (defaultAddressBook[i].memberId == memberIdToBeSearched) {
                bool = true;
                return defaultAddressBook[i];
            }
        }
        return bool;
    }
    editMember(memberIdToBeSearched, defaultAddressBook, propertyToBeEdited, newPropertyValue) {
        var len = defaultAddressBook.length;
        for (var i = 0; i < len; i++) {
            if (defaultAddressBook[i].memberId == memberIdToBeSearched) {
                defaultAddressBook[i][propertyToBeEdited] = newPropertyValue;
            }
        }
        return defaultAddressBook;
    }

    sortEntriesByLastName(defaultAddressBook) {
        var len = defaultAddressBook.length;
        var array = [];
        var finalArray = []
        for (var i = 0; i < len; i++) {
            array.push(defaultAddressBook[i].lastName);
        }
        for (var i = 0; i < len; i++) {
            array.sort();
        }
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len; j++) {
                if (defaultAddressBook[j].lastName == array[i]) {
                    finalArray.push(defaultAddressBook[j]);
                }
            }
        }
        return finalArray;
    }
    printInMailingLabelFormat(defaultAddressBook) {
        var len = defaultAddressBook.length;
        for (var i = 0; i < len; i++) {
            console.log(defaultAddressBook[i].firstName + " " + defaultAddressBook[i].lastName);
            console.log(defaultAddressBook[i].address + ", " + defaultAddressBook[i].city);
            console.log(defaultAddressBook[i].state + "-" + defaultAddressBook[i].zip + "\n");
        }
    }
    sortEntriesByZip(defaultAddressBook) {
        var len = defaultAddressBook.length;
        var array = [];
        var finalArray = []
        for (var i = 0; i < len; i++) {
            array.push(defaultAddressBook[i].zip);
        }
        for (var i = 0; i < len; i++) {
            array.sort();
        }
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len; j++) {
                if (defaultAddressBook[j].zip == array[i]) {
                    finalArray.push(defaultAddressBook[j]);
                }
            }
        }
        return finalArray;
    }
}
module.exports={addressBookMember}