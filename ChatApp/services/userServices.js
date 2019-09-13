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
exports.loginService = (body,callback)=>{
    userModel.register(body , (err , result) => {
        if(err ){
            callback(err,null);
        }else{
            callback(null ,result);
        }
    })
}