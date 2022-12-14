const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Post = require('../models/post');
const googleUserSchema  = new Schema({
    date:{
        type:String,
        required:true
    },
    googleId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"I am new"
    },
    
});
module.exports = mongoose.model('GoogleUser',googleUserSchema);