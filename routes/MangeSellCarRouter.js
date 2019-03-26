const express = require('express');
const app = express();
const MangeSellCarRouter = express.Router();
const SellCar = require('../models/TRN_sell_car.model');

MangeSellCarRouter.route('/').get(function (req, res) {
    SellCar.find(function (err, SellCar) {
    if (err) {
      console.log(err);
    } else {
      // res.send(SellCar)
      res.render('ManageSellCar', {
        SellCar: SellCar
      });
    }
  });
});

// ---------------------------delete-----------------------------------
MangeSellCarRouter.route("/delete/:_id").get(function(req, res) {
  SellCar.findByIdAndRemove({ _id: req.params.id }, function(err, SellCar) {
    if (err) res.json(err);
    else res.redirect("/sellcar");
  });
});

// ---------------------------update-----------------------------------
MangeSellCarRouter.post('/update/:_id', (req, res, next) => {
  SellCar.findByIdAndUpdate(req.params._id , req.body , (err, SellCar) => {
      if (err) {
        return res.status(500).send(err.message)
      }
      res.redirect('/sellcar')
      // res.status(200).send({success : {message : "แก้ไขพนักงานสำเร็จ"}})
    })
})

module.exports = MangeSellCarRouter;