const readline = require('readline-sync');

class Input {
    constructor(){

    }
    getNameInput() {
        var name = readline.question("Enter the name");
        try {
            if (!isNaN(name))
                throw "Name must be a string";
            if (name.trim() == "")
                throw "Name cant be empty";
            else
                return name;
        }
        catch (err) {
            console.log(err);
            this.getNameInput();
        }
    }
    getFirstNameInput() {
        var name = readline.question("Enter the first name");
        try {
            if (!isNaN(name))
                throw "Name must be a string";
            if (name.trim() == "")
                throw "Name cant be empty";
            else
                return name;
        }
        catch (err) {
            console.log(err);
            this.getFirstNameInput();
        }
    }
    getLastNameInput() {
        var name = readline.question("Enter the last name");
        try {
            if (!isNaN(name))
                throw "Name must be a string";
            if (name.trim() == "")
                throw "Name cant be empty";
            else
                return name;
        }
        catch (err) {
            console.log(err);
            this.getLastNameInput();
        }
    }
    getIdInput() {
        var id = readline.question("Enter the id");
        try {
            if (isNaN(id))
                throw "Id must be a number";
            if (id.trim() == "")
                throw "Id cant be empty";
            else
                return id;
        }
        catch (err) {
            console.log(err);
            this.getIdInput();
        }
    }
    getAddressInput() {
        var address = readline.question("Enter the address");
        try {
            if (!isNaN(address))
                throw "Address must be a string";
            if (address.trim() == "")
                throw "Address cant be empty";
            else
                return address;
        }
        catch (err) {
            console.log(err);
            this.getAddressInput();
        }
    }
    getCityInput() {
        var city = readline.question("Enter the city name");
        try {
            if (!isNaN(city))
                throw "City must be a string";
            if (city.trim() == "")
                throw "City cant be empty";
            else
                return city;
        }
        catch (err) {
            console.log(err);
            this.getCityInput();
        }
    }
    getStateInput() {
        var state = readline.question("Enter the state name");
        try {
            if (!isNaN(state))
                throw "State must be a string";
            if (state.trim() == "")
                throw "State cant be empty";
            else
                return state;
        }
        catch (err) {
            console.log(err);
            this.getStateInput();
        }
    }
    getZipInput() {
        var zip = readline.question("Enter the zipcode");
        try {
            if (isNaN(zip))
                throw "zip must be a number";
            if (zip.trim() == "")
                throw "zip cant be empty";
            if (zip.length != 6)
                throw "zip must be of exactly 6 digits";
            else
                return zip;
        }
        catch (err) {
            console.log(err);
            this.getZipInput();
        }
    }
    getPhoneInput() {
        var phone = readline.question("Enter the phone number");
        try {
            if (isNaN(phone))
                throw "phone number must be a number";
            if (phone.trim() == "")
                throw "phone number cant be empty";
            if (phone.length != 10)
                throw "phone must be of exactly 10 digits";
            else
                return phone;
        }
        catch (err) {
            console.log(err);
            this.getPhoneInput();
        }
    }
    getPropertyToBeEditedInput() {
        var propertyToBeEdited = readline.question("Enter the property of the member that needs to be edited ");
        try {
            if (!isNaN(propertyToBeEdited))
                throw "property must be a string";
            if (propertyToBeEdited.trim() == "")
                throw "property cant be empty";
            else
                return propertyToBeEdited;
        }
        catch (err) {
            console.log(err);
            this.getPropertyToBeEditedInput();
        }
    }
    getNewPropertyValueInput() {
        var newPropertyValue = readline.question("Enter the new value of the property ");
        return newPropertyValue;
    }
    getInputForAddressBook() {
        var name = this.getNameInput();
        var addressBookId = this.getIdInput();
        return { name, addressBookId };
    }
    getInputForAddressBookMember() {
        var firstName = this.getFirstNameInput();
        var lastName = this.getLastNameInput();
        var memberId = this.getIdInput();
        var address = this.getAddressInput();
        var city = this.getCityInput();
        var state = this.getStateInput();
        var zip = this.getZipInput();
        var phoneNo = this.getPhoneInput();
        return { firstName, lastName, memberId, address, city, state, zip, phoneNo, "addressBookId": "0" };
    }
}
module.exports={Input}