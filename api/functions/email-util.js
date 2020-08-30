const nodemailer = require('nodemailer')
const mailgunTransport = require('nodemailer-mailgun-transport')
// Configure transport options
const mailgunOptions = {
  auth: {
    api_key: 'key-e11b7d31105ac0e08827ed7c6e7fa14f',
    domain: 'www.snaptovector.com'
  }
}
const transport = mailgunTransport(mailgunOptions);
const emailClient = nodemailer.createTransport(transport);

// EmailService
exports.sendText = (to, subject, text, html, attachment) => {
  var bccEmails = ["mansoorsheikh9@gmail.com", "ma.raza96@gmail.com"];
  return new Promise((resolve, reject) => {
    if (attachment !== "") {
      emailClient.sendMail({
        from: 'Snaptovector <postmaster@www.snaptovector.com>',
        to: to,
        bcc: bccEmails,
        subject: subject,
        text: text,
        html: html,
        attachments: [attachment]
      }, (err, info) => {
        if (err) {
          reject(err)
        } else {
          resolve(info)
        }
      })
    } else {
      emailClient.sendMail({
        from: 'Snaptovector <postmaster@www.snaptovector.com>',
        to: to,
        subject: subject,
        text: text,
        html: html
      }, (err, info) => {
        if (err) {
          reject(err)
        } else {
          resolve(info)
        }
      })
    }
  })
}


/* const emailConfig = require('./email-config')();
const mailgun = require('mailgun-js')(emailConfig);


exports.sendEmail = (recipient, message, attachment) =>
    new Promise((resolve, reject) => {
        const data = {
            from: 'snaptovector <postmaster@www.snaptovector.com>',
            to: recipient,
            subject: message.subject,
            text: message.text,
            //inline: "static/images/user-uploads/images-1538554568554.jpg",
            html: message.html,
        };

        mailgun.messages().send(data, (error) => {
            if (error) {
                return reject(error); 
            }
        return resolve();
        });
    }); */