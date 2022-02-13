var mongoose = require('mongoose')
var schema = mongoose.schema
var userSchema = new schema({
    name: {type:String, required:true},
    age: Number,
}, {timestamps: true})

var User = mongoose.model('User', userSchema)

module.exports = Book
