writeCode

Create an express application named `school` from scratch and setup ejs as template engine.
var express = require('express')
var mongoose = require('mongoose')
var path = require('path)

mongoose.connect()

var app = express('mongodb://localhost/sample', {
useNewUrlParser: true, useUnifiedTopology: true
}, (err) => {
    console.log(err ? err : 'connected')
})

app.get('/', (req,res) => {
    res.render('index.ejs')
})

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.listen(3000)

<h1><%= school %></h1>
