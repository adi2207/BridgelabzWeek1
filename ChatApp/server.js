const express = require('express'); //building APIs
const bodyParser = require('body-parser');  //creates a req.body object 

// create express app
const app = express();

//create middlewares using app.use, middlewares have access to the req and res objects.
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
//importing the database configuration in server.js
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});



// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to the chat application. "});
});

require('./app/routes/user.routes')(app);

// listen for requests for incoming connections
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
