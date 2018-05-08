var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var path = require("path");
var nodemailer = require('nodemailer');
var port = process.env.PORT; // port for running node instance
var user = process.env.EMAIL_USER; // user login, also sender name
var pass = process.env.EMAIL_PASS; // user pass
var emailHost = process.env.EMAIL_HOST; // email service url
var emailPort = process.env.EMAIL_PORT; // email service port
var ssl = process.env.EMAIL_SSL; // boolean for security
var recepients = process.env.EMAIL_RECEPIENTS; // email for receiving
var hiddenRecepients = process.env.EMAIL_HIDDEN_RECEPIENTS; // email for hidden receiving
var subject = process.env.EMAIL_SUBJECT; // subject of letter

var transporter = nodemailer.createTransport({
    host: emailHost,
    port: emailPort,
    secure: ssl, 
    auth: {
        user: user,
        pass: pass
    }
});

transporter.verify(function(error, success) {
    if (error) {
         console.log(error);
    } else {
         console.log('Server is ready to take our messages');
    }
 });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/sendEmail', function(req, res){
    res.setHeader('Content-Type', 'application/json');

    var emailContent = req.body;

    if(emailContent.position === "Senior Data Scientist - Machine Learning") {
        subject = 'test';
    }

    var mailOptions = {
        from: '<' + user + '>' + emailContent.name,
        to: recepients,
        bcc: hiddenRecepients,
        subject: subject + emailContent.position,
        text: 'Full Name: ' + emailContent.name + '\n Current position:' + emailContent.currentOccupation + '\n Phone: ' + emailContent.phone + ' \n e-mail: ' + emailContent.email,
        html: '<b>Full Name:</b> ' + emailContent.name + '<br> <b> Current position:</b>' + emailContent.currentOccupation + '<br> <b>Phone:</b> ' + emailContent.phone +  '<br> <b>e-mail:</b> ' + emailContent.email
    };

    // console.log(JSON.stringify(mailOptions));

    transporter.sendMail(mailOptions, function(error, info) {
        if(error) {
            res.json(error);
        } else {
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        }
    });
    
    res.send(emailContent);
});

app.listen(port, function () {
    console.log('Server is running. Point your browser to: http://localhost:' + port);
});