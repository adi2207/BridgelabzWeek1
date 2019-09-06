const fs = require('fs');
var readline = require('readline-sync');
var docArray=[];

class Doctor {
    createDoctor({name, id, specialization, time}) {
        this.name = name;
        this.id = id;
        this.specialization = specialization;
        this.time = time;
        return this;
    }
    searchDocByName(nameToBeSearched) {
        var bool=false;
        let rawdata = fs.readFileSync('doctorsList.json');    
        let doctorsList = JSON.parse(rawdata);
        for(var i=0;i<doctorsList.length;i++){
            if(doctorsList[i].name==nameToBeSearched){
                bool=true;
                console.log(doctorsList[i]);
            }
        }
        return bool;
    }
    searchDocById(idToBeSearched){
        var bool=false;
        let rawdata = fs.readFileSync('doctorsList.json');    
        let doctorsList = JSON.parse(rawdata);
        for(var i=0;i<doctorsList.length;i++){
            if(doctorsList[i].id==idToBeSearched){
                bool=true;
                console.log(doctorsList[i]);
            }
        }
        return bool;
    }
    searchDocBySpecialization(specializationToBeSearched){
        var bool=false;
        let rawdata = fs.readFileSync('doctorsList.json');    
        let doctorsList = JSON.parse(rawdata);
        for(var i=0;i<doctorsList.length;i++){
            if((doctorsList[i].specialization==specializationToBeSearched)){
                bool=true;
                console.log(doctorsList[i]);
            }
        }
        return bool;
    }
    searchDocByAvailability(timeToBeSearched){
        var bool=false;
        let rawdata = fs.readFileSync('doctorsList.json');    
        let doctorsList = JSON.parse(rawdata);
        for(var i=0;i<doctorsList.length;i++){
            if(doctorsList[i].time===timeToBeSearched||doctorsList[i].time=='both'){
                bool=true;
                console.log(doctorsList[i]);
            }
        }
        return bool;
    }
}

class Patient {

    createPatient({name, mobile, id, age}) {
        this.name = name;
        this.mobile = mobile;
        this.id = id;
        this.age = age;
        return this;
    }
    searchPatientByName(nameToBeSearched) {
        var bool=false;
        let rawdata = fs.readFileSync('patientsList.json');    
        let patientsList = JSON.parse(rawdata);
        for(var i=0;i<patientsList.length;i++){
            if(patientsList[i].name==nameToBeSearched){
                bool=true;
                console.log(patientsList[i]);
            }
        }
        return bool;
    }
    searchPatientById(idToBeSearched){
        var bool=false;
        let rawdata = fs.readFileSync('patientsList.json');    
        let patientsList = JSON.parse(rawdata);
        for(var i=0;i<patientsList.length;i++){
            if(patientsList[i].id==idToBeSearched){
                bool=true;
                console.log(patientsList[i]);
            }
        }
        return bool;
    }
    searchPatientByMobile(mobileToBeSearched){
        var bool=false;
        let rawdata = fs.readFileSync('patientsList.json');    
        let patientsList = JSON.parse(rawdata);
        for(var i=0;i<patientsList.length;i++){
            if(patientsList[i].mobile==mobileToBeSearched){
                bool=true;
                console.log(patientsList[i]);
            }
        }
        return bool;
    }
    searchPatientByAge(ageToBeSearched){
        var bool=false;
        let rawdata = fs.readFileSync('patientsList.json');    
        let patientsList = JSON.parse(rawdata);
        for(var i=0;i<patientsList.length;i++){
            if(patientsList[i].age==ageToBeSearched){
                bool=true;
                console.log(patientsList[i]);
            }
        }
        return bool;
    }

}

class Appointment{
    createAppointment(appointmentId,patientId,doctorId,time) {
        this.appointmentId=appointmentId;
        this.patientId = patientId;
        this.doctorId =doctorId;
        this.time=time;
        return this;
    }
}

module.exports = { Doctor, Patient ,Appointment}