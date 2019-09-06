var doctor = require('../OOPS/clinicManagement').Doctor;
var patient = require('../OOPS/clinicManagement').Patient;
var appointment = require('../OOPS/clinicManagement').Appointment;

const fs = require('fs');
var readline = require('readline-sync');

function takeUserInputForDoc() {
    var name = readline.question("Enter name of the doctor ");
    var id = readline.question("Enter id of the doctor ");
    var specialization = readline.question("Enter specialisation of the doctor ");
    var time = readline.question("Enter timeslot of the doctor, am pm or both ");
    return { name, id, specialization, time };
}
function docCreation() {

    let rawdata = fs.readFileSync('doctorsList.json'); 
    var doc = JSON.parse(rawdata);
    var i=doc.length;
    while (1) {
        doc[i] = new doctor();
        doc[i].createDoctor(takeUserInputForDoc());
        i++;
        var askToExit = readline.question("Do you want to input more doctors? Press y/n ");
        if (askToExit == 'n')
            break;
    }
    let data = JSON.stringify(doc,null,2);
    fs.writeFileSync('doctorsList.json', data);
}

function searchDoc() {
    var bool;
    doc = new doctor();
    var howToSearch = readline.question("Choose how you you want to search for a doctor\nPress 1 to search by name\nPress 2 to search by id\nPress 3 to search by speciality\nPress 4 to search by time ");
    if (howToSearch == 1) {
        var nameToBeSearched = readline.question("Enter name to be searched ");
        bool=doc.searchDocByName(nameToBeSearched);
    }
    else if (howToSearch == 2) {
        var idToBeSearched = readline.question("Enter id to be searched ");
        bool=doc.searchDocById(idToBeSearched);
    }
    else if (howToSearch == 3) {
        var specializationToBeSearched = readline.question("Enter speciality to be searched ");
        bool=doc.searchDocBySpecialization(specializationToBeSearched);
    }
    else if (howToSearch == 4) {
        var timeToBeSearched = readline.question("Enter time to be searched ");
        bool=doc.searchDocByAvailability(timeToBeSearched);
    }
    else {
        console.log("INVALID INPUT");
        searchDoc();
    }
    return bool;
}
function takeUserInputForPatient() {
    var name = readline.question("Enter name of the patient ");
    var id = readline.question("Enter id of the patient ");
    var mobile = readline.question("Enter mobile of the patient ");
    var age = readline.question("Enter age of the patient ");
    return { name, mobile, id, age };
}

function patientCreation() {
    let rawdata = fs.readFileSync('patientsList.json'); 
    var pat = JSON.parse(rawdata);
    var i=pat.length;

    while (1) {
        pat[i] = new patient();
        pat[i].createPatient(takeUserInputForPatient());
        i++;
        var askToExit = readline.question("Do you want to input more patients? Press y/n ");
        if (askToExit == 'n')
            break;
    }
    let data = JSON.stringify(pat);
    fs.writeFileSync('patientsList.json', data);
}

function searchPatient() {
    var bool;
    pat = new patient();
    var howToSearch = readline.question("Choose how you want to search for a patient\nPress 1 to search by name\nPress 2 to search by id\nPress 3 to search by mobile\nPress 4 to search by age ");
    if (howToSearch == 1) {
        var nameToBeSearched = readline.question("Enter name to be searched ");
        bool=pat.searchPatientByName(nameToBeSearched);
    }
    else if (howToSearch == 2) {
        var idToBeSearched = readline.question("Enter id to be searched ");
        bool=pat.searchPatientById(idToBeSearched);
    }
    else if (howToSearch == 3) {
        var mobileToBeSearched = readline.question("Enter mobile to be searched ");
        bool=pat.searchPatientByMobile(mobileToBeSearched);
    }
    else if (howToSearch == 4) {
        var ageToBeSearched = readline.question("Enter age to be searched ");
        bool=pat.searchPatientByAge(ageToBeSearched);
    }
    else {
        console.log("INVALID INPUT");
        searchPatient();
    }
    return bool;
}
function appointmentCreation(appointmentId,patientId,doctorId,time) {
    let rawdata = fs.readFileSync('appointmentsList.json'); 
    var appoint =JSON.parse(rawdata);
    var i=appoint.length;
    appoint[i] = new appointment();
    appoint[i].createAppointment(appointmentId,patientId,doctorId,time);
    i++;
    let data = JSON.stringify(appoint);
    fs.writeFileSync('appointmentsList.json', data);
    console.log("APPOINTMENT CREATED SUCCESSFULLY");
}

function bookAppointment(){
    console.log("THIS IS THE APPOINTMENT BOOKING PORTAL\n");
    var patientFound=searchPatient();
    if(patientFound==false){
        console.log("NO SUCH PATIENT RECORD EXISTS, ENTER DETAILS OF NEW PATIENT\n")
        patientCreation();
        return;
    }
    else{
        var patientId= readline.question("Choose patient id from the list\n");
    }
    var docFound=searchDoc();
    if(docFound==false){
        console.log("NO SUCH DOCTORS, PLEASE CHOOSE FROM THE AVAILABLE DOCTORS ONLY ");
        return;
    }
    else{
        var doctorId= readline.question("Choose doctor id from the list ");
        var time= readline.question("Choose time from the available time slots ");
        //check if appointment available here
        var appointmentId= readline.question("Enter new appointment id ");
        appointmentCreation(appointmentId,patientId,doctorId,time);
    }
}



docCreation();
//searchDoc();
//patientCreation();
//searchPatient();
//bookAppointment();


