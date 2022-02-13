var express = require('express')
var router = express.Router()
var User = require('../models/User')  //access to user model


router.get('/new', (req,res) =>{

    //res.send('info')
    res.render('userForm.ejs')
})

router.get('/', (req,res) =>{
    res.render('user')
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
    res.render('singleUser.ejs')
})

router.get('/:id/edit', (req,res) =>{
    
})

router.put('/:id', (req,res) =>{
    
})

router.delete('/:id', (req,res) =>{
    
})
