const userServices = require('../services/messageServices');

exports.sendMessageController=(req,res)=>{
    let responseResult = {};
    userServices.sendMessageService(req.body, (err, result) => {
        if (err) {
            responseResult.success = false;
            responseResult.errors = err;
            return res.status(400).send(responseResult);
        } else {
            responseResult.success = true;
            responseResult.result = result;
            return res.status(200).send(responseResult);
        }
    })
}
