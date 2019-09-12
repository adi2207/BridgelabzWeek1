var userModel=require('../app/models/user.model');

exports.registerService = 
console.log("service");
userModel.register(body , (err , result) => {
    if(err){
        callback(err,null);
    }else{
        callback(null ,result);
    }
})