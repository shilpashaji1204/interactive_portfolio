const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/users');
const { pool } = require('../db/queries/pool');

/* Login Page. */
router.get('/login', function(req, res) {
  userQueries.getUserByEmail('jack@a.com')
  .then(data => {
    res.send(data);
  });
});

//Login post 
router.post('/login', function(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  
  //check if user exists
  userQueries.getUserByEmail(email).then(data => {
    if (!data[0]) {
      return res.send('Error: email not in database.');
    }

    if (password != data[0].password) {
      return res.send('Error: Your password is incorrect!');
    }
  });
});

/* Register */
router.get('/register', function(req, res) {
  
  res.send('register page');
});

//Signup post method goes here
router.post('/register', function(req, res) {

  newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }
  //Check if user already exists
  userQueries.getUserByEmail(newUser.email).then(data => {
    if (data[0]) {
      return res.send('Error: this e-mail already in our database.');
    };
  });

  
  userQueries.addUser(newUser);

  res.redirect('/');
});

/* Work exp page */

router.get('/work', function(req, res) {
  res.send('exp page');
});

module.exports = router;
3
