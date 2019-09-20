const userServices = require('../services/userServices');
const jwt = require('jsonwebtoken');

const dbConfig = require('../config/database.config')

exports.registerController = (req, res) => {
    let responseResult = {};
    req.check("name", 'First name is required').not().isEmpty();
    req.check("password", 'Password is required').not().isEmpty();
    req.check("email", 'Email is required').not().isEmpty();
    req.check("email", 'Enter a valid email').isEmail();
    req.check("password", 'Password must be atleast 6 characters long').isLength({ min: 6 });
    var error = req.validationErrors();
    userServices.registerService(req.body, (err, result) => {
        if(error){
            responseResult.success = false;
            responseResult.errors = error;
            responseResult.message="Validation error";
            return res.status(500).send(responseResult);
        }
        else if (err) {
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
exports.loginController = (req, res) => {
    let responseResult = {};
    const userInput = {
        email: req.body.email,
        password: req.body.password
    }
    userServices.loginService(userInput, (err, result) => {
        if (err) {
            responseResult.success = false;
            responseResult.errors = err;
            return res.status(400).send(responseResult);
        } else if (result) {
            responseResult.success = true;
            responseResult.result = result;
            responseResult.token=jwt.sign({ _id: result._id,email: result.email }, dbConfig.JWT_SECRET, { expiresIn: '2d' });
            return res.status(200).send(responseResult);
        }
    })
}
exports.forgotController = (req, res) => {
    let responseResult = {};
    const userInput = {
        email: req.body.email,
    }
    
    userServices.forgotService(userInput, (err, result) => {
        
        if (err) {
            responseResult.success = false;
            responseResult.errors = err;
            return res.status(400).send(responseResult);
        } else if (result) {
            responseResult.success = true;
            responseResult.result = result;
            return res.status(200).send(responseResult);
        }
    })
}

exports.resetController = (req, res) => {
    let responseResult = {};



    const extractedData = {
        email: req.user.email,
        token: req.headers.authorization,
        password: req.body.password
    }
    console.log(extractedData)
    req.check("password", 'Password is required').not().isEmpty();
    req.check("password", 'Password must be atleast 6 characters long').isLength({ min: 6 });
    var error = req.validationErrors();
    userServices.resetService(extractedData, (err, result) => {
        if(error){
            responseResult.success = false;
            responseResult.errors = error;
            responseResult.message="Validation error";
            return res.status(500).send(responseResult);
        }
        else if (err) {
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



