const userServices = require('../services/userServices');


exports.registerController=
userServices.registerService(req.body, (err, result) => {
    console.log("controler");

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

