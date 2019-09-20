const mongoose = require('mongoose');

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

let Message = mongoose.model('MessageCollect', messageSchema);

class messageModel {
    sendMessage(body, callback) {
        const message = new Message({
            senderId: body.senderId,
            senderName: body.senderName,
            message: body.message,
            receiverId: body.receiverId,
            receiverName: body.receiverName,
        })
        message.save((err, result) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback(null, result);
            }
        })
    }
}
module.exports = new messageModel();
