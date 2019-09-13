const mongoose = require('mongoose');
const bcrypt=require('bcrypt');

const userSchema = mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required:true,
        minlength:6
    },
    saltSecret:String

});
userSchema.pre('save', function(next){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(this.password,salt,(err,hash)=>{
            this.password=hash;
            this.saltSecret=salt;
            next();
        })
    })
})
let User = mongoose.model('UserCollection', userSchema);

class userModel {
    register(body,callback) {
        const user = new User({
            name: body.name,
            email: body.email,
            password: body.password
        })
         user.save((err, result) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(null, result);
            }
        })
    }
    // login(body,callback){
    //     if(body.name)

    // }

}

module.exports = new userModel();

