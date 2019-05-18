const express = require('express')
const app = express();
const MangeBuyCarRouter = express.Router()
const BuyCar = require('../models/Car.model')
const Purchase = require('../models/TRN_purchase_car.model')
const Customer = require('../models/Customer.model')
const Employee = require('../models/Emp.model')

MangeBuyCarRouter.route('/').get(function (req, res) {
  BuyCar.find(function (err, cars) {
    if (err) {
      console.log(err);
    } else {
      Purchase.find(function (err, purchases) {
        if (err) {
          console.log(err);
        } else {
          Employee.find(function (err, emps) {
            if (err) {
              console.log(err);
            } else {
              Customer.find(function (err, cus) {
                if (err) {
                  console.log(err);
                } else {
                  res.render('ManageBuyCar', {
                    cars: cars,
                    purchases: purchases,
                    emps: emps,
                    cus: cus
                  })
                }
              })
            }
          })
        }
      });
    }
  });
});

MangeBuyCarRouter.post('/create', (req, res, next) => {
  var car = new BuyCar(req.body)
  var cus = new Customer(req.body)
  var purchase = new Purchase(req.body)
  purchase.save((err, data) => {
    if (err) {
      return res.send(err.message)
    } else {
      car.save((err, data) => {
        if (err) {
          // return res.send(err.message)
          res.redirect('/buycar')
        } else {
          cus.save((err, data) => {
            if (err) {
              return res.send(err.message)
            } else {
              // res.status(200).send({success : {message : "ซื้อรถเข้าสำเร็จ."}})
              res.redirect('/buycar')
            }
          })
        }
      })
    }
  })
})


// MangeBuyCarRouter.get('/delete/:_id', (req, res, next) => {
//   purchase.findByIdAndRemove(req.params._id,
//     (err, data) => {
//       if (err) {
//         return res.status(500).send(err.message)
//       } else {
//         car.findByIdAndRemove(req.params._id, (err, data) => {
//           if(err) {
//             return res.send(err.message)
//           } else {
//             cus.findByIdAndRemove(req.params._id, (err, data) => {
//               if(err) {
//                 return res.send(err.message)
//               } else {
//                 res.send ('ลบข้อมูลสำเร็จ')
//               }
//             })
//           }
//         })
//       }
//     })
// })


module.exports = MangeBuyCarRouter;