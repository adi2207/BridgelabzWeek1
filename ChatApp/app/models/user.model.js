const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,

});

let User = mongoose.model('UserCollection', userSchema);
class userModel {
    register(){
        //console.log("model");
        const user = new User({
            name: req.body.name, 
            email: req.body.email,
            password: req.body.password
        });
    
        // Saving user info in database
        user.save();
    }

        
}

module.exports = new userModel();

