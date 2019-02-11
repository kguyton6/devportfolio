require('dotenv').config({path: '../.env'})
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ctrl = require('./controller')
const {SERVER_PORT, DOMAIN} = process.env
const path = require('path');

app.use(bodyParser.json())
app.use( express.static(path.join(__dirname, 'build'))) 

app.post(`/api/message`, ctrl.send_message, ((req, res) => {
   res.status(200).send('Confirmation')
})) 
  

const Port = SERVER_PORT || 5000


app.listen(Port, () => {console.log(`Server is listening on ${SERVER_PORT}`)})
