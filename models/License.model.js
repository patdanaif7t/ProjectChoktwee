// Repair.model.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema Validation
var licenseSchema = Schema({
    
    ID_TRN_renew_license: {type: String},
    renew_license_date : String,
    renew_license_price: Number,
    car_license: String,
    ID_MST_employeeId: String,
    ID_TRN_bill: String,
    customer_citizen_id: String

},{
    collection: 'TRN_renew_license'
});

var License = mongoose.model('License', licenseSchema);
module.exports = License;