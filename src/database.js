'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/zapt',{useMongoClient: true}, (err)=>{
  console.log(" Database ERRRR!!!!", err);
});
