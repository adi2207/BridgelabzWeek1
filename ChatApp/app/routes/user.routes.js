module.exports = (app) => {
    const userCtrl = require('../../controllers/user.controller');

    // Creating a register
    app.post('/register', userCtrl.register);
}