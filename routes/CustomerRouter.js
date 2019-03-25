const express = require('express');
const app = express();
const CustomerRouter = express.Router();
const Customer = require('../models/Customer.model');

CustomerRouter.route('/').get(function (req, res) {
    Customer.find(function (err, cus){
    if(err){
      console.log(err);
    }
    else {
      res.render('Customer', {cus : cus});
    }
  });
});

module.exports = CustomerRouter;
