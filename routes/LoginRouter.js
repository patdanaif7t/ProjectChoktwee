const express = require('express');
const app = express();
const LoginRouter = express.Router();
const Emp = require('../models/Emp.model');


LoginRouter.route('/').get(function (req, res) {
  Emp.find(function (err, emps) {
    if (err) {
      console.log(err);
    }
    else {
      res.render('login', { emps: emps });
    }
  });
});

LoginRouter.route('/welcome').get(function (req, res) {
  Emp.find(function (err, emps) {
    if (err) {
      console.log(err);
    }
    else {
      res.render('ManageCar', { emps: emps });
    }
  });
});

module.exports = LoginRouter;