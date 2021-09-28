const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    id:{
        type:Number,
        unique:1
    },
    name:{
        type:String,        
    },
    surname:{
        type:String, 
    },
    username:{
        type:String, 
    },
    email:{
        type:String, 
    },
    title:{
        type:String, 
    },
    role:{
        type:String, 
    }

})

const User = mongoose.model('User', userSchema);

module.exports = User