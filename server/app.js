var dotenv = require('dotenv')
var dotenvExpand = require('dotenv-expand')
var myEnv = dotenv.config()

dotenvExpand(myEnv)


const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ctrl = require('./controller')

const {SERVER_PORT } = process.env

app.use(express.static( `${__dirname}/../build` ) );

app.use(bodyParser.json())




app.post(`/api/message`, ctrl.send_email, ctrl.send_sms) 
  

const Port = SERVER_PORT || 4100


app.listen(Port, () => {console.log(`Server is listening on ${SERVER_PORT}`)})
