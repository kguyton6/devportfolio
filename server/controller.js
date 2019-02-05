const nodemailer = require('nodemailer')


module.exports = {
    send_message: (req, res) => {
        const { message, name, email, subject } = req.body
        console.log(req.body)
    
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'OAuth2',
                user: 'kimguyton@gmail.com',
                clientId: '000000000000-xxx0.apps.googleusercontent.com',
                clientSecret: 'XxxxxXXxX0xxxxxxxx0XXxX0',
                refreshToken: '1/XXxXxsss-xxxXXXXXxXxx0XXXxxXXx0x00xxx',
                accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x'
          },
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