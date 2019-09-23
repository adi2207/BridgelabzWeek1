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

class userModel {
    hash(password) {
        const saltRounds = 10;
        var salt = bcrypt.genSaltSync(saltRounds);
        var hash = bcrypt.hashSync(password, salt);
        return hash;
    }
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
                User.updateOne({ email: userInput.email }, { token: forgotToken }, (err, user) => {
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
                    text: 'Please click on the given link to reset your password http://localhost:3000/?#!/reset/' + forgotToken + '\n'
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
    reset(req, callback) {
        User.findOne({ email: req.email }, (err, res) => {
            if (err) {
                callback(err)
            }
            else {
                if(res.token==req.token)
                {
                User.updateOne({ email: res.email }, { password:this.hash( req.password) }, (err, info) => {
                    if (err)
                        callback(err)
                    else
                        callback(null, res);
                })
           
             } }
        })
    }
    getUsers(req, callback) {
        User.find({}, (err, users) => {
            if (err) {
                callback({ message: "No users in the DB" });
            }
            else {
                callback(null, users);
            }
        }).select('_id').select('name').select('email');

    }
    getUserWithId(req, callback) {
        User.findOne({ _id: req._id }, (err, user) => {
            if (!user) {
                callback({ message: 'Email is not registered' })
            }
            else if (err) {
                callback(err);
            }
            else {
                callback(null, user);
            }
        }).select('_id').select('name').select('email');

    }
}

module.exports = new userModel();

