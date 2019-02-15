require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ctrl = require('./controller')
const path = require('path')
const {SERVER_PORT } = process.env


app.use(express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json())

app.post(`/api/message`, ctrl.send_message) 
  

const Port = SERVER_PORT || 5000

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '../build/index.html'));
 });

app.listen(Port, () => {console.log(`Server is listening on ${SERVER_PORT}`)})
