const router = require('express').Router()

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const user = require('../controllers/user.controller.js');
module.exports = (app) => {
   
    // Create a new Note
    app.post('/createuser', user.create);


   
    // Retrieve all users
    app.get('/allusers', user.findAll);

    // Retrieve a single user with userId
    app.get('/getuser/:userId', user.findOne);

    // Update a user with userId
    app.put('/updateuser/:userId', user.update);
     // Update a Note with userId
     app.put('/updateuserpass/:userId', user.updatenotpassword);
     app.put('/updatemap/:userId', user.updatemap);

    // Delete a user with userId
    app.delete('/deleteuser/:userId', user.delete);

    //Login
    app.post('/loginClient', user.findclient)

    app.get('/tokenaccount',user.findtoken)
    app.get('/tokenaccountall',user.findtokenall)

    app.get('/getuserEmail/:Email', user.findOneEmail);

    app.post('/sendmail',user.sendmaill)
    app.post('/sendsms',user.sendnumber)

}
