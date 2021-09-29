const express = require('express')
const cors = require('cors')
const connectDB = require('./database/connection')
const app = express()

connectDB()

app.use(express.json())
app.use(cors())

app.use('/users', require('./routes/router'))
app.use('/users/:id', require('./routes/router'))
app.use('/add-user', require('./routes/router'))
app.use('/update-user/:id', require('./routes/router'))
app.use('/delete-user/:id', require('./routes/router'))

app.listen(4000, console.log("Server started on port 4000"))