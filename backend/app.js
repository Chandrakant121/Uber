const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const express = require('express')
const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.get('Hello world')
})

module.exports = app