const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const logger = require('morgan');
const cors = require('cors');

const projects = require('./routes/index');
const users = require('./routes/users');
const messages = require('./routes/messages');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cookieSession({
    name: "session",
    keys: ["key1",]
  }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/api', projects);
app.use('/api', users);
app.use('/api', messages);


module.exports = app;
