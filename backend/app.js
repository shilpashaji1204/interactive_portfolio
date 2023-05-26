const express = require('express');
const path = require('path');
const session = require("express-session")
const logger = require('morgan');
const cors = require('cors');
const corsOptions = {
  origin: "http://127.0.0.1:5173",
  credentials: true,
};

const projects = require('./routes/projects');
const users = require('./routes/users');
const messages = require('./routes/messages');

const app = express();

// app.set("trust proxy", "http://127.0.0.1:5173");
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "session",
    cookie: { 
      maxAge: 1000 * 60 * 60,
      sameSite: "none",
      secure: false, 
    }
  })
);
// app.use(
//   cookieSession({
//     name: "session",
//     keys: ["key1"],
//     cookie: {
//       sameSite: "none",
//       secure: true,
//     },
//   }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));

app.use('/api', projects);
app.use('/api', users);
app.use('/api', messages);


module.exports = app;
