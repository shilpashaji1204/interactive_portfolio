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


/* Work exp page */

router.get('/work', function(req, res) {
  res.send('exp page');
});

module.exports = router;

