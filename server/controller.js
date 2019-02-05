require('dotenv').config()
const nodemailer = require('nodemailer')


module.exports = {
    send_message: (req, res) => {
        const { message, name, email, subject } = req.body
        console.log(req.body)
        const {MYEMAIL, MYPASSWORD} = process.env
    
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            user: MYEMAIL,
            password: MYPASSWORD

        })
        const mailOptions = {
          from: `"${name}" <${email}>`,
          to: `"Kim Guyton" <kimguyton@gmail.com>`,
          subject: `${subject}`,
          text: `${message}`,
           replyTo: `${email}`,
           html: `<b>${message}</b>`
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