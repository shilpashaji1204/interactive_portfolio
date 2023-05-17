const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/users');
const { pool } = require('../db/queries/pool');

//Get all users test code
router.get('/users', function(req, res) {
  
  userQueries.getAllUsers()
  .then(data=> {
    res.json(data)
  });
  
});

/* Login Page. */
router.get('/login', function(req, res) {

  //check if logged in
  if(req.cookies["user_id"]) {
    return res.send('You\'re already logged in.');
  }

  const templateVars = {
    user_id: req.cookies["user_id"],
  }

  res.render('/login', templateVars);

});


//Login post 
router.put('/login', function(req, res) {
  
  const email = req.body.email;
  const password = req.body.password;
  
  //check if user exists
  
  userQueries.getUserByEmail(email)
  .then(data => {
    if (!data[0]) {
      return res.json([false, `Error: email not in database: ${email}`]);
    }

    if (password != data[0].password) {
      return res.json([false, 'Error: Your password is incorrect!']);
    }

    //set user
    res.cookie("user_id", data[0].id);
    return res.json([true, data[0].id]);
  });

 
});

/* Register */
router.get('/register', function(req, res) {
  
  //check if user is logged in
  const templateVars = {
    user_id: req.cookies["user_id"],
  }
  if(req.cookies["user_id"]) {
    return res.send('You\re already logged in.');
  }

  //res.render('/register');
});

//Signup post method goes here
router.put('/register', function(req, res) {

  newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }

  //Check if user already exists
  userQueries.getUserByEmail(newUser.email).then(data => {
    if (data[0]) {
      return res.json([false, 'Error: this e-mail already in our database.']);
    };
  });

  //Add new user
  userQueries.addUser(newUser).then(data => {
    return res.json(data);
  })

  //Retreice data for new user
  // userQueries.getUserByEmail(newUser.email).then(data => {
  //   //res.cookie("user_id", data[0].id);
  //   return res.json([true, data[0].id]);
  // });  
});

//Logout

router.post('/logout', (req, res) => {
  res.cookie("user_id", null);
  res.redirect('/');
});

/* Work exp page */

router.get('/work', function(req, res) {
  res.send('exp page');
});

module.exports = router;
