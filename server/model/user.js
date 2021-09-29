const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    id: {
        type: Number,
        unique: 1
    },
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