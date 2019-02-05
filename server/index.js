require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ctrl = require('./controller')
const {SERVER_PORT} = process.env



app.use(bodyParser.json())
  
app.post('/api/message', ctrl.send_message) 
  

const Port = SERVER_PORT || 5000

app.use( express.static( `${__dirname}/../build`)) 

app.listen(Port, () => {console.log(`Server is listening on ${SERVER_PORT}`)})
