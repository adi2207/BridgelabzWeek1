var doctor = require('../OOPS/clinicManagement').Doctor;
const fs = require('fs');
var readline = require('readline-sync');

function takeUserInputForDoc() {
    var name = readline.question("Enter Name of the doctor ");
    var id = readline.question("Enter id of the doctor ");
    var specialization = readline.question("Enter specialisation of the doctor ");
    var time = readline.question("Enter timeslot of the doctor, am pm or both ");
    return {name,id,specialization,time};
}
function docCreation() {
    var i=0;
    var doc = new Array();
    while(1){
        doc[i] = new doctor();
        doc[i].createDoctor(takeUserInputForDoc());
        i++;
        var askToExit=readline.question("Do you want to input more doctors? press y/n ");
        if(askToExit=='n')
        break;
    }
    let data = JSON.stringify(doc);
    fs.writeFileSync('doctorsList.json', data);
}

function searchDoc(){
    doc=new doctor();
    var howToSearch=readline.question("Do you want to search for a doctor, Press 1 to search by name, Press 2 to search by id, Press 3 to search by speciality, Press 4 to search by time");
    if(howToSearch==1){
        var nameToBeSearched=readline.question("Enter name to be searched");
        console.log(doc.searchDocByName(nameToBeSearched));
    }
    else if(howToSearch==2){
        var idToBeSearched=readline.question("Enter id to be searched");
        console.log(doc.searchDocById(idToBeSearched));
    }
    else if(howToSearch==3){
        var specializationToBeSearched=readline.question("Enter speciality to be searched");
        console.log(doc.searchDocBySpecialization(specializationToBeSearched));
    }
    else if(howToSearch==4){
        var timeToBeSearched=readline.question("Enter time to be searched");
        console.log(doc.searchDocByAvailability(timeToBeSearched));
    }
    else{
        console.log("INVALID INPUT");
    }
}


//docCreation();
searchDoc();