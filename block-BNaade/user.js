var express = require('express')
var router = express.Router()
var User = require('../models/User')  //access to user model




router.get('/', (req,res, next) =>{
    User.find({}, (err,users) => {  //returns array of users
        if(err) return next(err)
        res.render('user.ejs', {users:users})  // can't render outside of user.find
    })
})

router.get('/new', (req,res) =>{

    //res.send('info')
    res.render('userForm.ejs')
})

router.post('/', (req,res, next) =>{
    //capture data
    console.log(req.body)
    //save to db
    User.create(req.body, (err, user) => {
        console.log(err, newUser)
        //error comes as null on db npm
    //response inside
        if(err) return res.redirect('/users/new')
        res.redirect('/')
    })

})


router.get('/:id', (req,res) =>{
    var id=req.params.id
    User.findById(id, (err,user) => {
        if(err) return next(err)
        res.render('singleUser.ejs')
    })
})

router.get('/:id/edit', (req,res) =>{
    
})

router.post('/:id', (req,res) =>{
    var id = req.params.id
    //using id find the book and update with new data coming from form
    User.findByIdAndUpdate(id, req.body, (err, updateUser) => {
        if(err) return next(err)
        res.redirect("/user/" + "id")
    })
})

router.delete('/:id', (req,res) =>{
    
})
