const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'xxx',
  port: 25,
  secure: false,
  auth: {
    user: 'jh3r',
    pass: 'xxx'
  },
  tls: {
    rejectUnauthorized: false
  }
});

// setup email data with unicode symbols
let mailOptions = {
  from: '"xxx 👻" <jay.m.hu@newegg.com>', // sender address
  to: 'lon.l.yang@newegg.com', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world ?', // plain text body
  html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message %s sent: %s', info.messageId, info.response);
});