const express = require('express')
const cors = require('cors')
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const connectDB = require('./database/connection')
const bodyParser = require('body-parser')

const options = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "Library API",
            version: "1.0.0",
            description: "This is sample server for a User operations"
        },
        servers: [
            {
                url: "http://localhost:4000/"
            }
        ]
    },
    apis: ["./routes/*.js"]
};

const specs = swaggerJsDoc(options);

const app = express()

app.use("/swagger", swaggerUI.serve, swaggerUI.setup(specs));

connectDB()
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

app.use('/', require('./routes/router'))

app.listen(4000, console.log("Server started on port 4000"))