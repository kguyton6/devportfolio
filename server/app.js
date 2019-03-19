var dotenv = require('dotenv')
var dotenvExpand = require('dotenv-expand')
var myEnv = dotenv.config()

dotenvExpand(myEnv)


const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ctrl = require('./controller')
var helmet = require('helmet');

const {SERVER_PORT } = process.env

app.use(express.static( `${__dirname}/../build` ) );

app.use(bodyParser.json())
app.use(helmet())



app.post(`/api/message`, ctrl.send_message) 
  

const Port = SERVER_PORT || 4100


app.listen(Port, () => {console.log(`Server is listening on ${SERVER_PORT}`)})
