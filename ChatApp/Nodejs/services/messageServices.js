var messageModel=require('../app/models/message.model');

exports.sendMessageService = (body,callback)=>{
    messageModel.sendMessage(body , (err , result) => {
        if(err ){
            callback(err,null);
        }else{
            callback(null ,result);
        }
    })
    }