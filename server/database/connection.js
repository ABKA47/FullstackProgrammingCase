const mongoose = require('mongoose')
const config = require("../config/config")

const connectDB = () => {
  
        const con = mongoose.connect(config.mongoURI).then(()=>console.log(`MongoDB connected`)).catch(err => console.log(err))
    }

module.exports = connectDB