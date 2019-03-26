const express = require('express');
const app = express();
const LoginRouter = express.Router();
const Emp = require('../models/Emp.model');


LoginRouter.route('/').get(function (req, res) {
  res.render('login');
});

LoginRouter.route('/').post((req, res) => {  
  console.log(req.body.email);
  console.log(req.body.pass);
  if(req.body.email && req.body.pass) {
    Emp.findOne({username: req.body.email}).then(emps => {
      if (emps.password === req.body.pass) {
        res.redirect('/mangeemployee')
      } else {
        res.redirect('/login')
      }
  }).catch(err => {
   
    res.redirect('/login')
  })
  }
})


LoginRouter.route('/reset').post((req, res) => {  
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