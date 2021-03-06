const express = require('express'); //building APIs
const bodyParser = require('body-parser');  //creates a req.body object 
const route=require('./Nodejs/app/routes/user.routes');
const expressvalidator = require('express-validator');

// create express app
const app = express();
const socketIO = require('socket.io'); 
const http = require('http')  

//create middlewares using app.use, middlewares have access to the req and res objects.
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
//importing the database configuration in server.js
const dbConfig = require('./Nodejs/config/database.config');
//importing mongoose tool used for interacting with db
const mongoose = require('mongoose');

//WHAT IS THIS DOING??
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...'+JSON.stringify(err,undefined,2));
    process.exit();
});
let server = http.createServer(app) 
let io = socketIO(server)
//adding middlewares
app.use(expressvalidator());
app.use("/",route);
app.use(express.static('./Angular6'));
io.on('connection', (socket)=>{
    console.log('New user connected');
    socket.emit('newMessage', { 
        from:'aditipal96@gamil.com', 
        text:'hepppp', 
        createdAt:123,
        to:'mukul97@gmail.com'
      });
  socket.on('createMessage', (newMessage)=>{ 
    console.log('newMessage', newMessage); 
  }); 
  socket.on('disconnect', ()=>{ 
    console.log('disconnected from user'); 
  }); 
}); 
app.use((req,res,next)=>{
    const error=new Error("Page not found");
    error.status=404;
    next(error);
})
app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message
        }
    })
})

// listen for requests for incoming connections
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
