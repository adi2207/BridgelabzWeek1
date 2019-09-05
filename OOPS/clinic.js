var doctor = require('../OOPS/clinicManagement').Doctor;
var patient = require('../OOPS/clinicManagement').Patient;
var appointment = require('../OOPS/clinicManagement').Appointment;

const fs = require('fs');
var readline = require('readline-sync');



function takeUserInputForDoc() {
    var name = readline.question("Enter Name of the doctor ");
    var id = readline.question("Enter id of the doctor ");
    var specialization = readline.question("Enter specialisation of the doctor ");
    var time = readline.question("Enter timeslot of the doctor, am pm or both ");
    return { name, id, specialization, time };
}
//if I want to add a new doc after a file has been created, everything needs to be rewritten
function docCreation() {
    var i = 0;
    var doc = new Array();
    while (1) {
        doc[i] = new doctor();
        doc[i].createDoctor(takeUserInputForDoc());
        i++;
        var askToExit = readline.question("Do you want to input more doctors? press y/n ");
        if (askToExit == 'n')
            break;
    }
    let data = JSON.stringify(doc);
    fs.writeFileSync('doctorsList.json', data);
}

function searchDoc() {
    doc = new doctor();
    var howToSearch = readline.question("Do you want to search for a doctor, Press 1 to search by name, Press 2 to search by id, Press 3 to search by speciality, Press 4 to search by time");
    if (howToSearch == 1) {
        var nameToBeSearched = readline.question("Enter name to be searched");
        doc.searchDocByName(nameToBeSearched);
    }
    else if (howToSearch == 2) {
        var idToBeSearched = readline.question("Enter id to be searched");
        doc.searchDocById(idToBeSearched);
    }
    else if (howToSearch == 3) {
        var specializationToBeSearched = readline.question("Enter speciality to be searched");
        doc.searchDocBySpecialization(specializationToBeSearched);
    }
    else if (howToSearch == 4) {
        var timeToBeSearched = readline.question("Enter time to be searched");
        doc.searchDocByAvailability(timeToBeSearched);
    }
    else {
        console.log("INVALID INPUT");
    }
}
function takeUserInputForPatient() {
    var name = readline.question("Enter Name of the patient ");
    var id = readline.question("Enter id of the patient ");
    var mobile = readline.question("Enter mobile of the patient ");
    var age = readline.question("Enter age of the patient ");
    return { name, mobile, id, age };
}
//if I want to add a new patient after a file has been created, everything needs to be rewritten

function patientCreation() {
    var i = 0;
    var pat = new Array();

    while (1) {
        pat[i] = new patient();
        pat[i].createPatient(takeUserInputForPatient());
        i++;
        var askToExit = readline.question("Do you want to input more patients? press y/n ");
        if (askToExit == 'n')
            break;
    }
    let data = JSON.stringify(pat);
    fs.writeFileSync('patientsList.json', data);
}

function searchPatient() {
    pat = new patient();
    var howToSearch = readline.question("Do you want to search for a patient, Press 1 to search by name, Press 2 to search by id, Press 3 to search by mobile, Press 4 to search by age");
    if (howToSearch == 1) {
        var nameToBeSearched = readline.question("Enter name to be searched");
        pat.searchPatientByName(nameToBeSearched);
    }
    else if (howToSearch == 2) {
        var idToBeSearched = readline.question("Enter id to be searched");
        pat.searchPatientById(idToBeSearched);
    }
    else if (howToSearch == 3) {
        var mobileToBeSearched = readline.question("Enter mobile to be searched");
        pat.searchPatientByMobile(mobileToBeSearched);
    }
    else if (howToSearch == 4) {
        var ageToBeSearched = readline.question("Enter age to be searched");
        pat.searchPatientByAge(ageToBeSearched);
    }
    else {
        console.log("INVALID INPUT");
    }
}

function bookAppointment(){
    var appointmentId= readline.question("Enter new appointment id");
    var patientFound=searchPatient();
    // if(!patientFound){
    //     patientCreation();       //check this
    // }
    //else{
        var patientId= readline.question("Choose patient id from the list");
    //}
    var docFound=searchDoc();
    //if(!docFound){
    //    console.log("Please choose from available doctors");
   // }
    //else{
        var doctorId= readline.question("Choose doctor id from the list");
        var time= readline.question("Choose time from the available time slots");
        //check if appointment available here
        var appoint=new appointment();
        appointment.createAppointment({appointmentId,patientId,doctorId,time});
        let data = JSON.stringify(appoint);
        fs.writeFileSync('appointmentsList.json', data);
    //}


}



//docCreation();
//searchDoc();
//patientCreation();
//searchPatient();
bookAppointment();


