writeCode

Create an express application named `school` from scratch and setup ejs as template engine.
var express = require('express')
var mongoose = require('mongoose')

mongoose.connect()

var app = express('mongodb://localhost/sample', {
useNewUrlParser: true, useUnifiedTopology: true
}, (err) => {
    console.log(err ? err : 'connected')
})

app.get('/', (req,res) => {
    res.send('welcome')
})
