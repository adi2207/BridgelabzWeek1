const express=require('express');
const router=express.Router();
const userCtrl = require('../../controllers/user.controller');

// Creating a register
router.post('/register', userCtrl.registerController);
router.post('/login', userCtrl.loginController);
router.post('/forgot', userCtrl.forgotController);
router.post('/reset', userCtrl.resetController);


module.exports=router;