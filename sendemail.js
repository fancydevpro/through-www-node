var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'borisglab@gmail.com',
    pass: 'Apple1234567890!',
  }
})

var mailOptions = {
  from: 'borisglab@gmail.com',
  to: 'yongli3330@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'This is the content of email.',
}

transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log(err)
  } else {
    console.log('Email sent: ', info.response)
  }
})