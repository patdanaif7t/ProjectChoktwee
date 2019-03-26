const express = require('express');
const app = express();
const LoginRouter = express.Router();
const Emp = require('../models/Emp.model');


LoginRouter.route('/').get(function (req, res) {
  res.render('login');
});

LoginRouter.route('/').post((req, res) => {  
  // console.log(req.body.username);
  // console.log(req.body.password);
  if(req.body.username && req.body.password) {
    Emp.findOne({username: req.body.username}).then(emps => {
      if (emps.password === req.body.password) {
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