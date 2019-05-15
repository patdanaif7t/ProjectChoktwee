const express = require('express');
const app = express();
const DashboardRouter = express.Router();
const Emp = require('../models/Emp.model');
const Customer = require('../models/Customer.model');
const Car = require('../models/Car.model');
const SellCar = require('../models/TRN_sell_car.model');

DashboardRouter.route('/').get(function (req, res) {
   Emp.find(function (err, emps) {
      if (err) {
         console.log(err);
      } else {
         Customer.find(function (err, cus) {
            Car.find(function (err, cars) {
               SellCar.find(function (err, sellCars) {
                  res.render('dashboard', {
                     emps: emps,
                     cus: cus,
                     cars: cars,
                     sellCars : sellCars
                  });
               })
            })
         })

      }
   })
});


module.exports = DashboardRouter;