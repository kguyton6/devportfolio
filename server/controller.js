require('dotenv').config()
const nodemailer = require('nodemailer')


module.exports = {
    send_message: (req, res) => {
        const { message, name, email, subject } = req.body
        const {MYEMAIL, MYPASSWORD} = process.env
    
        const transporter = nodemailer.createTransport({
           service: 'gmail',
        auth: {
            user: MYEMAIL,
            pass: MYPASSWORD
          }
        })

        const mailOptions = {
          from: `${email}`,
          to: `"Kim Guyton" <kimguyton@gmail.com>`,
          subject: `${subject} - Sent From Portfolio`,
           html: `<p>${message}<br/>From ${name}</p>`
        }
        console.log(mailOptions)
        transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
            console.error('there was an error: ', err);
          } else {
            console.log('Message Sent: %s ', info.response)
          }
        }
     )}
}