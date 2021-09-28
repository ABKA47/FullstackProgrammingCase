const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./database/connection')
const server = express()

connectDB()
const PORT = process.env.PORT || 4000

server.use(bodyParser.urlencoded({extended:true}))
server.use(express.json())

server.use('/users', require('./routes/router'))
server.use('/users/:id', require('./routes/router'))
server.use('/add-user', require('./routes/router'))
server.use('/update-user/:id',require('./routes/router'))
server.use('/delete-user/:id', require('./routes/router'))

server.listen(PORT,console.log(`Server started on port ${PORT}`))