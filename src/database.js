'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/zapt',{useMongoClient: true}, (err)=>{
  if(err){
    console.log(" Database ERRRR!!!!", err)
  }else{
    console.log("connected to mongo");
  }
});
