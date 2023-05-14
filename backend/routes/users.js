const express = require('express');
const router = express.Router();
const users = require('../db/queries/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource hey');
  // users.getUserById(1).then(data => {
  //   console.log(data);
  // })
  users.getExperienceById(7).then(data => {
    console.log(data);
  })
  .catch(e => {
    console.log(e)
  })
});

module.exports = router;

