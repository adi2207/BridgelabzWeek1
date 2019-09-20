const jwt = require('jsonwebtoken');
const dbConfig = require('../../config/database.config');


module.exports.authorise=function(req,res,next){
    const tokenReceived=req.headers["authorization"];
    if(!tokenReceived){
        res.status(402).send({message: "Token not provided"});
    }
    try {
        const decodedToken=jwt.verify(tokenReceived,dbConfig.JWT_SECRET);
        console.log(decodedToken)
        req.user=decodedToken;
        console.log(req.user.email);
        next();
    }catch(err){
        console.log(2);
        res.status(402).send({message: "Invalid token"});
    }
}