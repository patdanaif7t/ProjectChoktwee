const express = require('express');
const app = express();
const MangeSellCarRouter = express.Router();
const SellCar = require('../models/TRN_sell_car.model');

MangeSellCarRouter.route('/').get(function (req, res) {
    SellCar.find(function (err, SellCar) {
    if (err) {
      console.log(err);
    } else {
      // res.json(emps)
      res.render('ManageSellCar', {
        SellCar: SellCar
      });
    }
  });
});



module.exports = MangeSellCarRouter;