const mongoose = require('mongoose')
const sgMail = require('@sendgrid/mail')
const { response } = require('express')
const API_KEY = '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'


const EmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide an email.'],
    unique: true,
    lowercase: true,
},
    addressCoordinate: [Number],
    addressDescription: String,
    phoneNum:{
      type: Number,
      required: [true, 'Please provide a phone Number.'],
    }
}
)
/////////////////////////////////////////////////////////////////////////////

sgMail.setApiKey(API_KEY)

const sendEmail =(to,from,subject,text,html) =>{
  const msg ={
    to,
    from,
    subject,
    text,
    html
  }
  
 sgMail.send(msg,function(err,result){
  if(err){
    console.log('error')
  }else{
    console.log('success')
  }
});
};


const orderConfirmedM={
    to:'boudyhany22@gmail.com',
    from:{
        name:"Rabbit",
        email:'Iyadelwy2@gmail.com'
    },
    subject:'Order Confirmed',
    text:'Rabbit Order Confirmed',
    html:`<html>
    <head>
      <style type="text/css">
        body, p, div {
          font-family: Helvetica, Arial, sans-serif;
          font-size: 14px;
        }
        a {
          text-decoration: none;
        }
      </style>
      <title></title>
    </head>

    <body>
    <center>
    <h1 >Order Confirmation</h1>
      <p>
        Thanks for ordering from Rabbit,
      </p>
      <p>
        Your order has been accepted </strong>
      </p>
      <p>
     This is your order's ID
      </p>
      <p>
        {Order_ID}
      </p>
      <span style="font-size: 10px;"><a href=".">Email preferences</a></span>
    </center>
    </body>
  </html>`  
};

const OrderCreatedM={
    to:'boudyhany22@gmail.com',
    from:{
        name:"Rabbit",
        email:'Iyadelwy2@gmail.com'
    },
    subject:'Order Confirmed',
    text:'Hi',
    html:'<H1 align="Center"; style="color: ;Arctic Lime; font-size: 30px;">Thanks For Using Rabbit Mart!!</H1>'+
    '<p>This is my second paragraph.</p>'    
}

const VerificationMessage={
    to:'boudyhany22@gmail.com',
    from:{
        name:"Rabbit",
        email:'Iyadelwy2@gmail.com'
    },
    subject:'Email Verification',
    text:'Rabbit verification Code',
    html:`<html>
    <head>
      <style type="text/css">
        body, p, div {
          font-family: Helvetica, Arial, sans-serif;
          font-size: 14px;
        }
        a {
          text-decoration: none;
        }
      </style>
      <title></title>
    </head>

    <body>
    <center>
    <h1 >Email Verification</h1>
      <p>
        Thanks for providing an email address to rabbit,
      </p>
      <p>
        The verification code is: <strong>{{twilio_code}}</strong>
      </p>
      <p>
     use this code in the following link to verifyour email:
      </p>
      <p>
        <a href="https://your-company.com/signup/email/verify?token={{twilio_code}}" 
           style="background-color:#DCFD51; color:#000000; display:inline-block; padding:12px 40px 12px 40px; text-align:center; text-decoration:none;" 
           target="_blank">Verify Email Now</a>
      </p>
      <p>
        <strong>{{twilio_message}}</strong>
      </p>
      <p><a href="https://sendgrid.com/blog/open-source-transactional-email-templates/">Check out more templates</a></p>
      <span style="font-size: 10px;"><a href=".">Email preferences</a></span>
    </center>
    </body>
  </html>`
}

const message={
    to:'boudyhany22@gmail.com',
    from:{
        name:"Rabbit",
        email:'Iyadelwy2@gmail.com'
    },
    subject:'Order Confirmed',
    text:'Hi',
    html:'<H1 align="Center"; style="color: ;Arctic Lime; font-size: 30px;">Thanks For Using Rabbit Mart!!</H1>'+
    '<p>This is my second paragraph.</p>'    
}

/////////////////////////////////////////////////////////////////////////////

const EmailModel = mongoose.model("guestEmails", EmailSchema);
module.exports = EmailModel;