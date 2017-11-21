'use strict';
var express = require('express');

var User = require('../models/user');
//var todos = require('../../mock/todos.json')
var router = express.Router();

router.get('/test', (req,res,next)=>{
  res.send('Testing route');
})



module.exports = router;
