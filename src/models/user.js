var mongoose = require('mongoose');
var bcrypt  = require('bcrypt');
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.statics.authenticate = function(email, password, callback){
  User.findOne({email: email})
    .exec(function(error,user){
      if(error){
        return callback(error);
      }else if(!user){
        var err = new Error("USer not found")
        err.status = 401;
        return callback(err)

      }
      bcrypt.compare(password, user.password, function(error, result){
        if(result === true){
          return callback(null, user);
        }else{
          return callbck(error);
        }
      })
    })

};

//has password begore saving
UserSchema.pre('save',function(next){
  var user = this;
  console.log("THIS", this);
  bcrypt.hash(user.password, 10, (err,hash)=>{
    if(err){
      return next(err)
    }else{
      user.password = hash;
      next();
    }
  })
})

var User = mongoose.model('User', UserSchema);
module.exports = User;
