const express = require('express');
const app = express();
const MangeRepairRouter = express.Router();
const Repair = require('../models/TRN_repair_car.model');

MangeRepairRouter.route('/').get(function (req, res) {
    Repair.find(function (err, repair) {
    if (err) {
      console.log(err);
    } else {
      res.render('ManageRepair', {
        repair: repair
      });
    }
  });
});

MangeRepairRouter.post('/create', (req, res, next) => {
    var repairDoc = new Repair(req.body);
    repairDoc.save((err, data) => {
      if (err) {
        return res.send(err.message)
      }
      // res.status(200).send({success : {message : "Add Repair succesfully."}})
      res.redirect('/manage-repair')
    })
})

MangeRepairRouter.get('/get/:_id', (req, res, next) => {
  Repair.findById(req.params._id,
    (err, repair) => {
      if (err) {
        return res.status(500).send(err.message)
      }
      res.json({
        success: true,
        repair
      })
    })
})

MangeRepairRouter.get('/delete/:_id', (req, res, next) => {
  Repair.findByIdAndRemove(req.params._id,
    (err, emps) => {
      if (err) {
        return res.status(500).send(err.message)
      }
      res.redirect('/manage-repair')
      // res.status(200).send({success : {message : "Deleted Employee succesfully."}})
    })
})

MangeRepairRouter.post('/update', (req, res, next) => {
  Repair.findByIdAndUpdate(req.body.edit_id , req.body , (err, emps) => {
      if (err) {
        return res.status(500).send(err.message)
      }
      res.redirect('/manage-repair')
      // res.status(200).send({success : {message : "Update Repair succesfully."}})
    })
})


module.exports = MangeRepairRouter;