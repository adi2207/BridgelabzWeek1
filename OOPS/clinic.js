var doctor = require('../OOPS/clinicManagement').Doctor;
var patient = require('../OOPS/clinicManagement').Patient;
var appointment = require('../OOPS/clinicManagement').Appointment;

const fs = require('fs');
var readline = require('readline-sync');

function takeUserInputForDoc() {
    try {
        var name = readline.question("Enter name of the doctor ");
        if (!isNaN(name))
            throw "ERROR: Name of the doctor must be a string";
        var id = readline.question("Enter id of the doctor ");
        if (isNaN(id))
            throw "ERROR: Id of the doctor must be a number";
        var specialization = readline.question("Enter specialisation of the doctor ");
        if (!isNaN(specialization))
            throw "ERROR: Specialization of the doctor must be a string";
        var time = readline.question("Enter timeslot of the doctor, am pm or both ");
        if (time != 'am' && time != 'pm' && time != 'both')
            throw "ERROR: Time of the doctor must be either 'am' or 'pm' or 'both'";
        return { name, id, specialization, time };

    } catch (err) {
        console.log(err);
    }
}
function docCreation() {

    let rawdata = fs.readFileSync('doctorsList.json');
    var doc = JSON.parse(rawdata);
    var i = doc.length;
    while (1) {
        doc[i] = new doctor();
        doc[i].createDoctor(takeUserInputForDoc());
        i++;
        var askToExit = readline.question("Do you want to input more doctors? Press any button for yes, press n to exit ");
        if (askToExit == 'n')
            break;
    }
    let data = JSON.stringify(doc, null, 2);
    fs.writeFileSync('doctorsList.json', data);
}

function searchDoc() {
    var bool;
    doc = new doctor();
    try {
        var howToSearch = readline.question("Choose how you you want to search for a doctor\nPress 1 to search by name\nPress 2 to search by id\nPress 3 to search by speciality\nPress 4 to search by time ");
        if (howToSearch == 1) {
            var nameToBeSearched = readline.question("Enter name to be searched ");
            if (!isNaN(nameToBeSearched))
                throw "ERROR: Name of the doctor must be a string";
            bool = doc.searchDocByName(nameToBeSearched);
        }
        else if (howToSearch == 2) {
            var idToBeSearched = readline.question("Enter id to be searched ");
            if (!isNaN(idToBeSearched))
                throw "ERROR: Id of the doctor must be a string";
            bool = doc.searchDocById(idToBeSearched);
        }
        else if (howToSearch == 3) {
            var specializationToBeSearched = readline.question("Enter speciality to be searched ");
            if (!isNaN(specializationToBeSearched))
                throw "ERROR: Specialization of the doctor must be a string";
            bool = doc.searchDocBySpecialization(specializationToBeSearched);
        }
        else if (howToSearch == 4) {
            var timeToBeSearched = readline.question("Enter time to be searched ");
            if (timeToBeSearched != 'am' && timeToBeSearched != 'pm' && timeToBeSearched != 'both')
                throw "ERROR: Time of the doctor must be either 'am' or 'pm' or 'both'";
            bool = doc.searchDocByAvailability(timeToBeSearched);
        }
        else {
            console.log("INVALID INPUT");
            searchDoc();
        }
        return bool;
    } catch (err) {
        console.log(err);
    }
}
function takeUserInputForPatient() {
    try {
        var name = readline.question("Enter name of the patient ");
        if (!isNaN(name))
            throw "ERROR: Name of the patient must be a string";
        var id = readline.question("Enter id of the patient ");
        if (isNaN(id))
            throw "ERROR: Id of the patient must be a number";
        var mobile = readline.question("Enter mobile of the patient ");
        if (isNaN(mobile) || mobile.toString().length != 10)
            throw "The phone number must be a 10 digit number";
        var age = readline.question("Enter age of the patient ");
        if (isNaN(age))
            throw "ERROR: Age of the patient must be a number";

        return { name, mobile, id, age };
    } catch (err) {
        console.log(err);
    }
}

function patientCreation() {
    let rawdata = fs.readFileSync('patientsList.json');
    var pat = JSON.parse(rawdata);
    var i = pat.length;

    while (1) {
        pat[i] = new patient();
        pat[i].createPatient(takeUserInputForPatient());
        i++;
        var askToExit = readline.question("Do you want to input more patients? Press any button for yes/n to exit");
        if (askToExit == 'n')
            break;
    }
    let data = JSON.stringify(pat);
    fs.writeFileSync('patientsList.json', data);
}

function searchPatient() {
    var bool;
    pat = new patient();
    try {
        var howToSearch = readline.question("Choose how you want to search for a patient\nPress 1 to search by name\nPress 2 to search by id\nPress 3 to search by mobile\nPress 4 to search by age ");
        if (howToSearch == 1) {
            var nameToBeSearched = readline.question("Enter name to be searched ");
            if (!isNaN(nameToBeSearched))
                throw "ERROR: Name of the patient must be a string";
            bool = pat.searchPatientByName(nameToBeSearched);
        }
        else if (howToSearch == 2) {
            var idToBeSearched = readline.question("Enter id to be searched ");
            if (isNaN(idToBeSearched))
                throw "ERROR: Id of the patient must be a number";
            bool = pat.searchPatientById(idToBeSearched);
        }
        else if (howToSearch == 3) {
            var mobileToBeSearched = readline.question("Enter mobile to be searched ");
            if (isNaN(mobileToBeSearched) || mobileToBeSearched.toString().length != 10)
                throw "The phone number must be a 10 digit number";
            bool = pat.searchPatientByMobile(mobileToBeSearched);
        }
        else if (howToSearch == 4) {
            var ageToBeSearched = readline.question("Enter age to be searched ");
            if (isNaN(ageToBeSearched))
                throw "ERROR: Age of the patient must be a number";
            bool = pat.searchPatientByAge(ageToBeSearched);
        }
        else {
            console.log("INVALID INPUT");
            searchPatient();
        }
        return bool;
    } catch (err) {
        console.log(err);
    }

}
function appointmentCreation(appointmentId, patientId, doctorId, time) {
    let rawdata = fs.readFileSync('appointmentsList.json');
    var appoint = JSON.parse(rawdata);
    var i = appoint.length;
    appoint[i] = new appointment();
    appoint[i].createAppointment(appointmentId, patientId, doctorId, time);
    i++;
    let data = JSON.stringify(appoint);
    fs.writeFileSync('appointmentsList.json', data);
    console.log("APPOINTMENT CREATED SUCCESSFULLY");
}

function bookAppointment() {
    //COMPLETE THIS
    console.log("THIS IS THE APPOINTMENT BOOKING PORTAL\n");
    var patientFound = searchPatient();
    if (patientFound == false) {
        console.log("NO SUCH PATIENT RECORD EXISTS, ENTER DETAILS OF NEW PATIENT\n")
        patientCreation();
        return;
    }
    else {
        var patientId = readline.question("Choose patient id from the list\n");
    }
    var docFound = searchDoc();
    if (docFound == false) {
        console.log("NO SUCH DOCTORS, PLEASE CHOOSE FROM THE AVAILABLE DOCTORS ONLY ");
        return;
    }
    else {
        var doctorId = readline.question("Choose doctor id from the list ");
        var time = readline.question("Choose time from the available time slots ");
        //check if appointment available here
        var appointmentId = readline.question("Enter new appointment id ");
        appointmentCreation(appointmentId, patientId, doctorId, time);
    }
}



docCreation();
//searchDoc();
//patientCreation();
//searchPatient();
//bookAppointment();


