const dotenv = require('dotenv')
const cors = require('cors')
const express = require('express')
const connect = require('./db/db')
const userRoutes = require('./routes/user.routes')

const app = express()
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


connect()
app.use(cors())

app.get('/', (req, res) => {
    res.get('Hello world')
})

app.use('/users', userRoutes)

module.exports = app