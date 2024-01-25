var usermodel = require('../model/usermodel');
const storage = require('node-persist');
const bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');
storage.init( /* options ... */);

var jwt = require('jsonwebtoken');    //token
const { token } = require('morgan');

var login_status = 0;


exports.login = async (req, res) => {
    var data =  usermodel.find({ "email": req.body.email });
    // var login_status =  storage.getItem('user_id');

    if (login_status == 1) {

        if (data.length == 1) {
            bcrypt.compare(req.body.password, data[0].password, async function (err, result) {
                if (result == true) {
                    
                    var token =  jwt.sign({id:data[0].id},"cdmi");

                    var a = Math.floor(100000 + Math.random() * 900000);
                    console.log(a)

                    // mail start

                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                          user: 'rohanchauhan1123@gmail.com',
                          pass: 'fcfwhamfhkqirumh'
                        }
                      });
                      
                      var mailOptions = {
                        from: 'rohanchauhan1123@gmail.com',
                        to: 'rohanchauhan1123@gmail.com',
                        subject: 'Sending Email using Node.js',
                        text: "otp is " + a
                      };
                      
                      transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                          console.log(error);
                        } else {
                          console.log('Email sent: ' + info.response);
                        }
                      });

                    // mail end

                    await storage.setItem('user_id', data[0].id)
                    res.status(200).json({
                        status: "login success",
                        token
                    })
                }
                else {
                    res.status(200).json({
                        status: "check your email and password"
                    })
                }
            });
        }
        else {
            res.status(200).json({
                status: "check your email and password"
            })
        }
    }
    else {
        res.status(200).json({
            status: "user is already login"
        })
    }
}

exports.logout = async (req, res) => {
    login_status = 0;
    // await storage.clear();
    res.status(200).json({
        status: "user logout"
    })
}
