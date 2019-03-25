const express = require('express');
const app = express();
const MangeCarRouter = express.Router();
const Car = require('../models/Car.model');

MangeCarRouter.route('/').get(function (req, res) {
    Car.find(function (err, cars){
    if(err){
      console.log(err);
    }
    else {
      res.render('ManageCar', {cars : cars});
    }
  });
});

module.exports = MangeCarRouter;
