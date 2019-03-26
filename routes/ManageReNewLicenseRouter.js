const express = require('express');
const app = express();
const reNewLicense = express.Router();
const License = require('../models/License.model');
const Customer = require('../models/Customer.model')

reNewLicense.get('/' , (req , res , next) => {
    License.find((err , license) => {
        //console.log('eiei')
        if(err){
            console.log(err)
        }else {
           // console.log(license)
            res.render('ManageReNewLicense' , { license : license})
        }
    }) 
})

reNewLicense.get('/allJson' , (req , res)  => {
    License.find((err,license) => {
        if(err)
        console.log(err)
        else{
        console.log(license)
        res.json(license)
        }
    })
})

reNewLicense.post('/insert' , (req , res) => {
    var license = new License()
    var customer = new Customer()

    license.ID_TRN_renew_license = req.body.ID_TRN_renew_license
    license.renew_license_date = req.body.renew_license_date
    license.renew_license_count = 1
    license.renew_license_price = 500
    license.car_license = req.body.car_license
    license.ID_MST_customer = req.body.customer_citizen_id
    license.ID_MST_employeeId = req.body.ID_MST_employeeId

    console.log(license)

    customer.customer_type = req.body.customer_type
    customer.customer_citizen_id = req.body.customer_citizen_id
    customer.customer_first_name = req.body.customer_first_name
    customer.customer_last_name = req.body.customer_last_name

    customer.address.address_id = req.body.address_id
    customer.address.district = req.body.district
    customer.address.sub_district = req.body.sub_district
    customer.address.province = req.body.province
    customer.address.postcode = req.body.postcode
   
    customer.customer_email = req.body.customer_email
    customer.customer_telephone = req.body.customer_telephone

    customer.save((err) => {
      if (err) {
        return res.send(err.message)
      }
      // res.status(200).send({success : {message : "Add Employee succesfully."}})
    })
    license.save((err) => {
        if(err)
        return res.send(err.message)
    })

  

    console.log(customer)

  

})


reNewLicense.get('/delete/:id', (req, res, next) => {  
    License.findByIdAndRemove(req.params.id,
      (err, emps) => {
        if (err) {
          return res.status(500).send(err.message + "ei")
        }
        res.redirect('/ManageReNewLicense')
        // res.status(200).send({success : {message : "Deleted Employee succesfully."}})
      })
  })

  


module.exports = reNewLicense;
