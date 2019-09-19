var userModel=require('../app/models/user.model');

exports.registerService = (body,callback)=>{
userModel.register(body , (err , result) => {
    if(err ){
        callback(err,null);
    }else{
        callback(null ,result);
    }
})
}
exports.loginService = (userInput,callback)=>{
    userModel.login(userInput , (err , result) => {
        if(err ){
            callback(err,null);
        }else{
            callback(null ,result);
        }
    })
}
exports.forgotService = (userInput,callback)=>{
    userModel.forgot(userInput , (err , result) => {
        if(err ){
            callback(err,null);
        }else{
            callback(null ,result);
        }
    })
}
exports.resetService = (userInput,callback)=>{
    userModel.reset(userInput , (err , result) => {
        if(err ){
            callback(err,null);
        }else{
            callback(null ,result);
        }
    })
}