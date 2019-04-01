const express = require('express');
const app = express();
const MangeEmpRouter = express.Router();
const Emp = require('../models/Emp.model');

MangeEmpRouter.route('/').get(function (req, res) {
  Emp.find(function (err, emps) {
    if (err) {
      console.log(err);
    } else {
     // res.send(emps)
      // console.log(emps[3].address.address_id);
      res.render('ManageEmp', {
        emps: emps
      });
    }
  });
});

MangeEmpRouter.get('/delete/:_id', (req, res, next) => {
  Emp.findByIdAndRemove(req.params._id,
    (err, emps) => {
      if (err) {
        return res.status(500).send(err.message)
      }
      res.redirect('/mangeemployee')
      // res.status(200).send({success : {message : "Deleted Employee succesfully."}})
    })
})

MangeEmpRouter.post('/create', (req, res, next) => {
  var doc = new Emp(req.body);
  doc.save((err, data) => {
    if (err) {
      return res.send(err.message)
    }
    // res.status(200).send({success : {message : "Add Employee succesfully."}})
    res.redirect('/mangeemployee')
  })
})

MangeEmpRouter.get('/get/:_id', (req, res, next) => {
  Emp.findById(req.params._id,
    (err, emp) => {
      if (err) {
        return res.status(500).send(err.message)
      }
      res.json({
        success: true,
        emp
      })
    })
})

MangeEmpRouter.post('/update', (req, res, next) => {
  Emp.findByIdAndUpdate(req.body._id, req.body, (err, data) => {

    if (err) {
      return res.status(500).send(err.message)
    }
    res.redirect('/mangeemployee')
  })
})

module.exports = MangeEmpRouter;