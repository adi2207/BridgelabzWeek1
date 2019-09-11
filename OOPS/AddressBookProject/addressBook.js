class addressBook {
    
    get id() {
        return this.addressBookId;
    }
    set id(addressBookId) {
        this.addressBookId = addressBookId;
    }
    get bookName() {
        return this.name;
    }
    set bookName(name) {
        this.name = name;
    }

    closeAddressBook() {
        //CLOSE
    }
    openAddressBook() {
        //OPEN
    }
    saveAddressBookToFile() {
        //SAVE,SAVEAS
    }
    //QUIT closes all open address books
}
module.exports={addressBook}