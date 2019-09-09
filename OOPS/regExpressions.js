var readline = require('readline-sync');

class Regex {
    takeInput() {
        try {
            var firstname = readline.question("Enter the first name");
            if (!isNaN(firstname))
                throw "First name must be a string";
            var lastname = readline.question("Enter the last name");
            if (!isNaN(lastname))
                throw "Last name must be a string";
            var mobile = readline.question("Enter the mobile number");
            if (isNaN(mobile)|| mobile.toString().length != 10)
                throw "Mobile must be a 10 digit number";
            return {firstname,lastname,mobile};
        } catch (err) {
            console.log(err);
        }

    }
    printMessage(obj) {
        console.log("Hello " + obj.firstname + ", We have your fullname as " + obj.firstname + " " + obj.lastname + " in our system. Your contact number is +91" + obj.mobile + ".\nPlease,let us know in case of any clarification.\nThank you.\nBridgeLabz.\n" + Date(Date.now()));
    }
}
var regex = new Regex();

var obj = regex.takeInput();
if(obj)
    regex.printMessage(obj);
