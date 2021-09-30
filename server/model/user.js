const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({  
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
    username: {
        type: String,
    },
    title: {
        type: String,
    },
    email: {
        type: String,
    },
    role: {
        type: String,
    }

})

const User = mongoose.model('Users', userSchema);

module.exports = { User }