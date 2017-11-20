'use strict';

var express = require('express');
var router = require('./api');
var parser = require('body-parser');
var authSecret = require('authSecret');
var app = express();

require('./database');
require('./seed');
app.use("/",express.static('public'));

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error: ', ));
//use sessions for tracking logins
app.use(session({
  secret: authSecret.secret,
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

// make use Id available in templates
app.use(function(req,res,next){
  res.locals.currentUser = req.session.userId;
  next();
})


app.use(parser.json());
app.use("/api", router);

app.listen(3000, ()=>{
  console.log("Running");
})
