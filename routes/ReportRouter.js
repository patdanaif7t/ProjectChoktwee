const express = require('express');
const app = express();
const ReportRouter = express.Router();
const License = require('../models/License.model');
// const sell = require('../models/Sell.model')


ReportRouter.route('/').get(function (req, res) {
  License.find(function (err, license) {
    if (err) {
      console.log(err);
    }
    else {
      // res.send(license)
      res.render('Report', { license: license });
    }
  });
});

module.exports = ReportRouter;