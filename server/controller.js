require("dotenv").config();
const nodemailer = require("nodemailer");
const { MYEMAIL, MYPASSWORD} = process.env

module.exports = {
  send_message: (req, res, next) => {
    console.log('nodemailer')
    const { message, name, email, subject } = req.body;
      var content = `name: ${name} \n email: ${email} \n message: ${message} `
    
      var mailOptions = {
        from: name,
        to: MYEMAIL,  //Change to email address that you want to receive messages on
        subject: `${subject} from Contact Form`,
        text: content
      }
  
    let transporter = nodemailer.createTransport({
      service: `gmail`,
      host: `smtp.gmail.com`,
      port: 465,
      auth: {
        user: MYEMAIL, 
        pass: MYPASSWORD
      }
    });
 
    transporter.sendMail({mailOptions}, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    });
  }
};
