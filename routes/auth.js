const express = require('express');
const {body} = require('express-validator/check');
const User = require('../models/user');
const {OAuth2Client} = require('google-auth-library');
const authController = require('../controllers/auth');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.put('/signup',
[
        body('email')
        .isEmail().withMessage('Please enter a valid email.')
        .custom((value,{req})=>{
            return User.findOne({email:value}).then(userDoc=>{
                if(userDoc){
                    return Promise.reject('E-mail already exist!');
                }
            });
        })
        .normalizeEmail(),
        body('password')
        .trim().isLength({min:5}),
        body('name')
        .trim()
        .not()
        .isEmpty()

],
authController.signup);

router.get('/googleauth/',(req,res)=>{
    console.log(req.user,"why");
    if(req.user!==undefined)
    {
        const token = jwt.sign({
            googleId:req.user.googleId,
            userId:req.user._id.toString()
        },
        'somesupersecret',
        {expiresIn:'1h'})
        res.status(200).json({user:req.user,token:token});
    }
    else{
        console.log("hello")
    }

    
})
router.get('/logout/',(req,res)=>{
    req.logOut();
    console.log(req.user,"logout");
    res.status(200).json({user:req.user});
})
/*
router.put('/api/v1/auth/google',async (req,res)=>{
    const token = req.body.token;
    console.log(token);
    const ticket = await client.verifyIdToken({
        idToken:token,
        audience: process.env.GOOGLE_CLIENT_ID
    });
    const {name,email,picture} = ticket.getPayload();
    GoogleUser.findOne({email:email})
    .then(resUser=>{
        if(!resUser)
        {
            const user = new GoogleUser({
                email:email,
                name:name,
                image:picture,
                date:new Date().toISOString()
            })
            user.save()
            const token = jwt.sign(
                {
                  email: email,
                  userId:user._id.toString()
                },
                'somesupersecret',
                {expiresIn:'1h'}
            );
            console.log(user);
            res.status(201);
            res.json({user:user,token:token,userId:user._id.toString(),userName:name,picture:picture,date:new Date().toISOString(),exist:1});
        }
        else{
            const token = jwt.sign(
                {
                  email: email,
                  userId:resUser._id.toString()
                },
                'somesupersecret',
                {expiresIn:'1h'}
            );
            res.status(201);
            console.log(resUser);
            res.json({user:resUser,userId:resUser._id.toString(),token:token,userName:name,picture:picture,date:resUser.date,exist:1});
        }
        
    })
    .catch(err=>{
        console.log(err);
    })
    
    
    
})
  */        
router.post('/login',authController.login);
router.post('/reset',authController.reset);
router.post('/reset/:token',authController.newPassword);
module.exports = router;