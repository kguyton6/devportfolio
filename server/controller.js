require("dotenv").config();
const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");

module.exports = {
  send_message: (req, res, next) => {
    const { message, name, email, subject } = req.body;

    let transporter = nodemailer.createTransport({
      service: `gmail`,
      host: `smtp.gmail.com`,
      secure: false,
      port: `465`,
      auth: {
        user: process.env.MYEMAIL, 
        pass: process.env.MYPASSWORD
      }
    });
    let mailOptions = {
      from: email,
      to: process.env.MYEMAIL,
      subject: subject,
      text: `${message} from ${name}`
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("there was an error: ", err);
      } else {
        console.log("Message Sent: %s ", info.response);
      }
      next();
    });
  }
};
