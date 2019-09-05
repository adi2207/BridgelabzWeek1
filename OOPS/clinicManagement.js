const fs = require('fs');
var readline = require('readline-sync');
var docArray=[];

class Doctor {
    createDoctor({name, id, specialization, time}) {
        this.name = name;
        this.id = id;
        this.specialization = specialization;
        this.time = time;
    }
    searchDocByName(nameToBeSearched) {
        let rawdata = fs.readFileSync('doctorsList.json');    
        let doctorsList = JSON.parse(rawdata);
        for(var i=0;i<doctorsList.length;i++){
            if(doctorsList[i].name==nameToBeSearched)
                return doctorsList[i];
        }
        return false;
    }
    searchDocById(idToBeSearched){
        let rawdata = fs.readFileSync('doctorsList.json');    
        let doctorsList = JSON.parse(rawdata);
        for(var i=0;i<doctorsList.length;i++){
            if(doctorsList[i].id==idToBeSearched)
                return doctorsList[i];
        }
        return false;
    }
    searchDocBySpecialization(specializationToBeSearched){
        let rawdata = fs.readFileSync('doctorsList.json');    
        let doctorsList = JSON.parse(rawdata);
        for(var i=0;i<doctorsList.length;i++){
            if((doctorsList[i].specialization==specializationToBeSearched))
                return doctorsList[i];
        }
        return false;
    }
    searchDocByAvailability(timeToBeSearched){
        let rawdata = fs.readFileSync('doctorsList.json');    
        let doctorsList = JSON.parse(rawdata);
        for(var i=0;i<doctorsList.length;i++){
            if(doctorsList[i].time===timeToBeSearched||doctorsList[i].time=='both')
                return doctorsList[i];
        }
        return false;
    }
    displayDoc(){
        console.log("The doctors details are");
        console.log("NAME: "+this.name+", SPECIALIZATION: "+this.specialization+", AVAILABILTY: "+this.timeSlot);
    }
}

class Patient {

    createPatient({name, mobile, id, age}) {
        this.name = name;
        this.mobile = mobile;
        this.id = id;
        this.age = age;
    }
    searchPatientByName(nameToBeSearched) {
        let rawdata = fs.readFileSync('patientsList.json');    
        let patientsList = JSON.parse(rawdata);
        for(var i=0;i<patientsList.length;i++){
            if(patientsList[i].name==nameToBeSearched)
                return patientsList[i];
        }
        return false;
    }
    searchPatientById(idToBeSearched){
        let rawdata = fs.readFileSync('patientsList.json');    
        let patientsList = JSON.parse(rawdata);
        for(var i=0;i<patientsList.length;i++){
            if(patientsList[i].id==idToBeSearched)
                return patientsList[i];
        }
        return false;
    }
    searchPatientByMobile(mobileToBeSearched){
        let rawdata = fs.readFileSync('patientsList.json');    
        let patientsList = JSON.parse(rawdata);
        for(var i=0;i<patientsList.length;i++){
            if(patientsList[i].id==mobileToBeSearched)
                return patientsList[i];
        }
        return false;
    }
    searchPatientByAge(ageToBeSearched){
        let rawdata = fs.readFileSync('patientsList.json');    
        let patientsList = JSON.parse(rawdata);
        for(var i=0;i<patientsList.length;i++){
            if(patientsList[i].id==ageToBeSearched)
                return patientsList[i];
        }
        return false;
    }

}

module.exports = { Doctor, Patient }