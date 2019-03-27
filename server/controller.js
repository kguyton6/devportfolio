require("dotenv").config();
const nodemailer = require("nodemailer");
const {PASSWORD, DOMAIN, EMAIL, MYNUMBER, MAILGUN_API_KEY, TWILIO_NUMBER, ACCOUNT_SID, AUTH_TOKEN} = process.env
const accountSid = ACCOUNT_SID;
const authToken = AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const Mailgun = require('mailgun-js')


module.exports = {
  send_email: async (req, res, next) => {
var mailgun = new Mailgun({apiKey: MAILGUN_API_KEY, domain: DOMAIN});
    const {email, name, subject, message} = req.body.newMessage
    var data = {
        from: email,
        to: EMAIL,
        subject: subject,
        html: `<p>${req.body.newMessage}</p>`
      }

      mailgun.messages().send(data, function (err, body) {
          if (err) {
              console.log("got an error: ", body);
          }
          else {
              res.status(200).send('submitted', body);
          }
      });

    next()
  },
  send_sms: (req, res, next) => {
    const {name} = req.body.newMessage
    const text = req.body.newMessage.message
client.messages
  .create({
     body: `New Contact ${name} \n
     ${text}`,
     from: TWILIO_NUMBER,
     to: MYNUMBER
   })
  .then(message => console.log(message.sid));

  }
};
