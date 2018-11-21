var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fdsaf@gmail.com',
    pass: 'fjdksajflkdsal',
  }
})

var mailOptions = {
  from: 'fdsaf@gmail.com',
  to: 'ylfdsafi30@gmail.com, johfdsafn@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'This is the content of email.',
  html: '<h1>Email</h1><p>This is a example of email sending!</p>',
}

transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log(err)
  } else {
    console.log('Email sent: ', info.response)
  }
})