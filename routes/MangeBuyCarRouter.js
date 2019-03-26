const express = require('express');
const app = express();
const MangeBuyCarRouter = express.Router();
const BuyCar = require('../models/Car.model');
const Purchase = require('../models/TRN_purchase_car.model');

MangeBuyCarRouter.route('/').get(function (req, res) {
    BuyCar.find(function (err, cars) {
    if (err) {
      console.log(err);
    } else {
        Purchase.findOne()
      res.render('ManageBuyCar', {
        cars: cars
      });
    }
  });
});
MangeBuyCarRouter.route('/').get(function (req, res) {
    Purchase.find(function (err,purchases ) {
    if (err) {
      console.log(err);
    } else {
      // res.json(emps)
      res.render('ManageBuyCar', {
        purchases: purchases
      });
    }
  });
});



module.exports = MangeBuyCarRouter;