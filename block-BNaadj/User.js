var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new schema({
    name: {type:String, required:true},
    email: String,
    age: Number,
    address: String,
    bio: String,
    hobbies: [String]
}, {timestamps: true})

var User = mongoose.model('User', userSchema)

module.exports = User;
