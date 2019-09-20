const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dbConfig = require('../../config/database.config')
const nodemailer = require('nodemailer');
var events = require('events');
//var eventEmitter = new events.EventEmitter();

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    token: {
        type: String,
        default: null
    },
    saltSecret: String

});

const messageSchema = mongoose.Schema({
    senderName: {
        type: String,
        required: true,
    },
    receiverName: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    senderId: {
        type: String,
        required: true,
    },
    receiverId: {
        type: String,
        required: true,
    }
});

userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        })
    })
})


let User = mongoose.model('UserCollection', userSchema);
let Messages = mongoose.model('MessageCollection', messageSchema);


class userModel {
    register(body, callback) {
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
    login(userInput, callback) {
        User.findOne({ email: userInput.email }, (err, user) => {
            if (err) {
                callback(err);
            }
            else if (!user) {
                callback({ message: 'Email is not registered' })
            }
            else if (!bcrypt.compare(userInput.password, user.password)) {
                callback({ message: 'Passwords dont match' })
            }
            else {
                callback(null, user);
            }
        });
    }
    forgot(userInput, callback) {
        User.findOne({ email: userInput.email }, (err, user) => {
            if (!user) {
                callback({ message: 'Email is not registered' })
            }
            else {
                var forgotToken = jwt.sign({ _id: user._id, name: user.name, email: user.email }, dbConfig.JWT_SECRET, { expiresIn: '2d' });
                User.update({ email: user.email }, { token: forgotToken }, (err, user) => {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, user);
                    }
                });
                var smtpTransport = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                        user: "aditipal96@gmail.com",
                        pass: dbConfig.password
                    }
                })
                var mailOptions = {
                    to: user.email,
                    from: 'aditipal96@gmail.com',
                    subject: 'Password Reset',
                    text: 'Please click on the given link to reset your password http://localhost:3000/#!/reset/' + forgotToken + '\n'
                }
                smtpTransport.sendMail(mailOptions, (err, result) => {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, result);
                    }
                })
            }
        })
    }
    verify(extractedData, callback) {
        User.findOne({email:extractedData.email}, (err, user) => {
            if(!user){
                callback({ message: 'Email is not registered' })
            }
            else{
                if(extractedData.token==user.token){
                    user.update({ password: extractedData.password }, (err, user) => {
                        if (err) {
                            callback(err);
                        } else {
                            callback(null, user);
                        }
                    });
                }
                else{
                    callback({message:'Token mismatch or expired'});
                }
            }
        })

    }


}

module.exports = new userModel();

