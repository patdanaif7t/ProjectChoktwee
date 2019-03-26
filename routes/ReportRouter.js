const express = require('express');
const app = express();
const ReportRouter = express.Router();
const License = require('../models/License.model');
const sell = require('../models/TRN_sell_car.model');
const repair = require('../models/TRN_repair_car.model.js')


ReportRouter.route('/').get(function (req, res) {
  License.find(function (err, license) {
    if (err) {
      console.log(err);
    }
    else {
      sell.find(function (err, sells){
        if (err) {
          console.log(err);      
        }else {
          repair.find(function (err, repairs){
            if (err) {
              console.log(err);      
            }else {
              res.render('Report', { license: license , sells : sells , repairs : repairs});
            }
          })
        }
      })
      // res.send(license)
    }
  });
});
// res.render('Report', { license: license , sells : sells});
module.exports = ReportRouter;