const express=require('express');
const router=express.Router();
const auth=require('./auth');
const userCtrl = require('../../controllers/user.controller');
const messageCtrl = require('../../controllers/message.controller');

router.post('/register', userCtrl.registerController);
router.post('/login', userCtrl.loginController);
router.post('/forgot', userCtrl.forgotController);
router.post('/reset',auth.authorise,userCtrl.resetController);
router.post('/sendMessage',messageCtrl.sendMessageController);
router.get('/getAllUsers',userCtrl.getUsersController);
router.get('/getUserWithId',userCtrl.getUserWithIdController);

module.exports=router;