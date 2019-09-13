const userServices = require('../services/userServices');

exports.registerController= (req,res)=>{
    let responseResult={};
    userServices.registerService(req.body, (err, result) => {
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
exports.loginController= (req,res)=>{
    let responseResult={};
    userServices.loginService(req.body, (err, result) => {
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

