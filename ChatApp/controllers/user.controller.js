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
    const userInput={
        email:req.body.email,
        password:req.body.password
    }
    userServices.loginService(userInput, (err, result) => {
    if (err) {
        responseResult.success = false;
        responseResult.errors = err;
        return res.status(400).send(responseResult);
    } else if(result){
        responseResult.success = true;
        responseResult.result = result;
        return res.status(200).send(responseResult);
    }
})
}
exports.forgotController= (req,res)=>{
    let responseResult={};
    const userInput={
        email:req.body.email,
    }
    userServices.forgotService(userInput, (err, result) => {
    if (err) {
        responseResult.success = false;
        responseResult.errors = err;
        return res.status(400).send(responseResult);
    } else if(result){
        responseResult.success = true;
        responseResult.result = result;
        return res.status(200).send(responseResult);
    }
})
}

exports.resetController= (req,res)=>{
    let responseResult={};
    const userInput={
        password:req.body.password,
    }
    userServices.resetService(userInput, (err, result) => {
    if (err) {
        responseResult.success = false;
        responseResult.errors = err;
        return res.status(400).send(responseResult);
    } else if(result){
        responseResult.success = true;
        responseResult.result = result;
        return res.status(200).send(responseResult);
    }
})
}



