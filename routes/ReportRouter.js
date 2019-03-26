const express = require('express');
const app = express();
const ReportRouter = express.Router();
const License = require('../models/License.model');
const sell = require('../models/TRN_sell_car.model');


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
          res.render('Report', { license: license , sells : sells});
        }
      })
      // res.send(license)
    }
  });
});

module.exports = ReportRouter;