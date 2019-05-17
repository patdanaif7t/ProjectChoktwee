const express = require('express');
const app = express();
const MangeSellCarRouter = express.Router();
const SellCar = require('../models/TRN_sell_car.model');
const Cus = require('../models/Customer.model');
const Car = require('../models/Car.model');

MangeSellCarRouter.route('/').get(function (req, res) {
  SellCar.find(function (err, SellCar) {
    if (err) {
      console.log(err);
    } else {
      // res.send(SellCar)
      Cus.find({ customer_type: "ซื้อ" }, function (err, Cus) {
        // console.log(Cus.length);
        res.render('ManageSellCar', { SellCar: SellCar, Cus: Cus });
      });
    }
  });
});

// ---------------------------delete-----------------------------------
// MangeSellCarRouter.route("/delete/:id").get(function (req, res) {
//   SellCar.findByIdAndRemove({ _id: req.params.id }, function (err, SellCar) {
//     if (err) res.json(err);
//     else {
//       Car.findOneAndUpdate({ID_MST_car : req.body.params.id}, {
//         car_status: 'มีในสต็อค'
//       }, function (err) {
//         if (err) {
//           return res.send(err.message)
//         } else {
//           res.redirect("/sellcar");
//         }
//       })
//     }
//   });
// });

// ---------------------------update-----------------------------------
MangeSellCarRouter.post('/update', (req, res, next) => {
  SellCar.findByIdAndUpdate(req.body._id,
    {
      ID_TRN_sellCar: req.body.ID_TRN_sellCar,
      ID_MST_car: req.body.ID_MST_car,
      ID_TRN_bill: req.body.ID_TRN_bill,
      sell_car_date: req.body.sell_car_date,
      ID_MST_employeeId: req.body.ID_MST_employeeId,
      sell_car_price: req.body.sell_car_price,
      ID_MST_customer: req.body.customer_id
    }, (err, SellCar) => {
      if (err) {
        return res.status(500).send(err.message)
      }
      Cus.findOneAndUpdate({ ID_MST_customer: SellCar.ID_MST_customer },
        {
          customer_type: req.body.customer_type,
          customer_citizen_id: req.body.customer_citizen_id,
          customer_first_name: req.body.customer_first_name,
          customer_last_name: req.body.customer_last_name,
          customer_telephone: req.body.customer_telephone,
          customer_email: req.body.customer_email,
          ID_MST_customer: req.body.customer_id,
          address: {
            address_id: req.body.address_id,
            bloc: req.body.bloc,
            district: req.body.district,
            sub_district: req.body.sub_district,
            province: req.body.province,
            postcode: req.body.postcode
          }
        }, (err, Cus) => {
          if (err) {
            return res.status(500).send(err.message)
          }
        })
    })
  res.redirect('/sellcar')
})

module.exports = MangeSellCarRouter;