const express = require('express');
const app = express();
const MangeCarRouter = express.Router();
const Car = require('../models/Car.model');
const SellCar = require('../models/TRN_sell_car.model');
const Customer = require('../models/Customer.model');

MangeCarRouter.route('/').get(function (req, res) {
  Car.find({
    car_status: 'มีในสต็อค'
  }, function (err, cars) {
    if (err) {
      console.log(err);
    } else {
      res.render('ManageCar', {
        cars: cars
      });
    }
  });
});

MangeCarRouter.get('/get/:_id', (req, res, next) => {
  Car.findById(req.params._id,
    (err, car) => {
      if (err) {
        return res.status(500).send(err.message)
      }
      res.json({
        success: true,
        car
      })
    })
})

MangeCarRouter.post('/create', (req, res, next) => {
  var sell = new SellCar(req.body);
  var cus = new Customer(req.body)
  sell.save((err) => {
    if (err) {
      return res.send(err.message)
    } else {
      console.log("เพิ่มการขายสำเร็จ");
      cus.save((err) => {
        if (err) {
          return res.send(err.message)
        } else {
          console.log("เพิ่มลูกค้าสำเร็จ");
          console.log(req.body.ID_MST_car);

          Car.findOneAndUpdate({ID_MST_car : req.body.ID_MST_car}, {
            car_status: 'ขายแล้ว'
          }, function (err) {
            if (err) {
              return res.send(err.message)
            } else {
              res.redirect('/mangecar')
            }
          })
        }
      })
    }
    console.log("เพิ่มการขายสำเร็จ");
  })
})

// MangeCarRouter.post('/create', (req, res, next) => {
//   var sell = new SellCar(req.body);
//   var cus = new Customer(req.body);
//   sell.ID_TRN_sellCar = req.body.ID_TRN_sellCar
//   sell.sell_car_date = req.body.sell_car_date
//   sell.sell_car_price = req.body.sell_car_price
//   sell.ID_MST_employeeId = req.body.ID_MST_employeeId //ไม่อออกเพราะเป็นtype int ละ sell id cusเป็นString มั้ง
//   sell.ID_TRN_bill = req.body.ID_TRN_bill
//   console.log(sell)
//   cus.customer_type = req.body.customer_type
//   cus.customer_citizen_id = req.body.customer_citizen_id
//   cus.customer_first_name = req.body.customer_first_name
//   cus.customer_last_name = req.body.customer_last_name
//   cus.ID_MST_customer = req.body.customer_citizen_id
//   cus.customer_telephone = req.body.customer_telephone
//   cus.customer_email = req.body.customer_email
//   cus.address_id = req.body.address_id
//   cus.bloc = req.body.bloc
//   cus.district = req.body.district
//   cus.sub_district = req.body.sub_district
//   cus.province = req.body.province
//   cus.postcode = req.body.postcode
//   console.log(cus)
//   //เหลือเปลี่ยนสถานะรถเป็นขายแล้ว
//   sell.save((err) => {
//     if (err) {
//       return res.send(err.message)
//     }
//     // res.status(200).send({success : {message : "Add Employee succesfully."}})
//   })
//   cus.save((err) => {
//     if (err)
//       return res.send(err.message)
//   })
//   Car.findOneAndUpdate(ID_MST_car = req.body.ID_MST_car, { car_status: 'ขายแล้ว' }, function (err, car) {
//     if (err)
//       return res.send(err.message)
//   })
//   res.redirect('/mangecar')

// })

MangeCarRouter.post('/update', (req, res, next) => {
  Car.findByIdAndUpdate(req.body._id, req.body, (err, data) => {

    if (err) {
      return res.status(500).send(err.message)
    }
    res.redirect('/mangecar')
  })
})

module.exports = MangeCarRouter;