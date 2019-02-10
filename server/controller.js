require("dotenv").config();
const nodemailer = require("nodemailer");


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
      from: process.env.MYEMAIL,
      to: process.env.MYEMAIL,
      subject: subject,
      text: `${message} from ${name}${email}`
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
