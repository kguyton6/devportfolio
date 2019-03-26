require("dotenv").config();
const nodemailer = require("nodemailer");
const {PASSWORD, EMAIL, MYNUMBER, TWILIO_NUMBER, ACCOUNT_SID, AUTH_TOKEN} = require('./config.js')
const accountSid = ACCOUNT_SID;
const authToken = AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


module.exports = {
  send_email: async (req, res, next) => {
    const {email, name, subject, message} = req.body
    var transporter = nodemailer.createTransport({
      host: 'smtp.mailgun.org',
      port: 587,
      auth: {
        user: EMAIL,
        pass: PASSWORD,
      }

    });
    const messageOptions = {
      to: EMAIL,
      from: email,
      subject: subject,
      html: `<strong>
                  Contact Information: </strong> <br/>
                  Name: ${name} <br/>
                  Email: ${email} <br/>
                  message: ${message}
                 `
    };
    transporter.sendMail(messageOptions, (err, info) => {
      if(err)
      console.log(err)
    else
      res.status(200).send(info);
    });

    next()
  },
  send_sms: (req, res, next) => {
    const {name, number} = req.body.message
client.messages
  .create({
     body: `New Lead: ${name} \n
     Number: ${number}`,
     from: TWILIO_NUMBER,
     to: MYNUMBER
   })
  .then(message => console.log(message.sid));

  }
};
