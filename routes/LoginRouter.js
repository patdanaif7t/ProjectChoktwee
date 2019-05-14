const express = require('express');
const app = express();
const LoginRouter = express.Router();
const Emp = require('../models/Emp.model');


LoginRouter.route('/').get(function (req, res) {
  Emp.find(function (err, emps) {
    if (err) {
      console.log(err);
    } else {
      // res.send(emps)
      res.render('login', { error: 'ถูก', emps,emps });
    }
  });
});


// login 
LoginRouter.route('/').post((req, res) => {  
  // console.log(req.body.email);
  // console.log(req.body.pass);
  if(req.body.username === ""){
    res.render('login', { error: 'ไม่กรอกไอดี' })
  } else if(req.body.password === ""){
    res.render('login', { error: 'ไม่กรอกพาส' })
  }else {
    if(req.body.username && req.body.password) {
      Emp.findOne({username: req.body.username}).then(emps => {
        if (emps.password === req.body.password) {
          res.redirect('/dashboard')
        } else {
          res.render('login', { error: 'ไม่ถูก' })
        }
    }).catch(err => {
      res.render('login', { error: 'ไม่ถูก' })
    })
    }
  }
})





LoginRouter.route('/reset').post((req, res) => {  
  console.log(req.body.employee_citizen_id );
  console.log(req.body.username);
  
  if(req.body.employee_citizen_id && req.body.username) {
    Emp.findOne({employee_citizen_id: req.body.employee_citizen_id}).then(emps => {
      if (emps.username === req.body.username) {
        res.json({
          success: true,
          password: emps.password
        })
      } 
      else {
        res.redirect('/login')
      }
  }).catch(err => {
   
    res.redirect('/login')
  })
  }
})



module.exports = LoginRouter;