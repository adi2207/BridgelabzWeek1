const jwt = require('jsonwebtoken');
const dbConfig = require('../../config/database.config');


module.exports.authorise=function(req,res,next){
    const tokenReceived=req.header("token");
    if(!tokenReceived){
        res.status(402).send({message: "Token not provided"});
    }
    try {
        const decodedToken=jwt.verify(tokenReceived,dbConfig.JWT_SECRET);
        req.user=decodedToken;
        next();
    }catch(err){
        res.status(402).send({message: "Invalid token"});
    }
}