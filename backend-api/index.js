require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var applicationRoutes = require('./controllers/postMessageController')


var app = express()
app.use(bodyParser.json())
app.use(cors({origin:'http://18.221.154.13:3000'}))
app.listen(4000,()=>console.log('Server started at : 4000'))


app.use('/postMessages',applicationRoutes)