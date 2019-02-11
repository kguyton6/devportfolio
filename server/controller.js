require("dotenv").config();
const nodemailer = require("nodemailer");


module.exports = {
  send_message: (req, res, next) => {
    const { message, name, email, subject } = req.body;
      var content = `name: ${name} \n email: ${email} \n message: ${message} `
    
      var mail = {
        from: name,
        to: process.env.MYEMAIL,  //Change to email address that you want to receive messages on
        subject: `${subject} from Contact Form`,
        text: content
      }
  
    let transporter = nodemailer.createTransport({
      service: `gmail`,
      host: `smtp.gmail.com`,
      port: 993,
      auth: {
        user: process.env.MYEMAIL, 
        pass: process.env.MYPASSWORD
      }
    });
 
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
      next();
    });
  }
};
