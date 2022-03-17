const express = require('express')
const { default: mongoose } = require("mongoose");
const app = express()
require("dotenv").config()
const routerApi = require('./routes')
const port = 3000

app.listen(port, () => console.log('Listening the port', port))

/*Middleware */
app.use(express.json())

mongoose
        .connect(process.env.MONGODB_CONNECTION_STRING)
        .then(() => console.log('Connect with MongoDB'))
        .catch((error) => console.error(error))

routerApi(app)



