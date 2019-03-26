var mongoose = require('mongoose');

var TRN_purchase_car_Schema = mongoose.Schema({
    ID_TRN_purchase : String,
    purchase_date : String,
    quantity_total : Number,
    total_cost : Number,
    ID_MST_employeeId : String,
    ID_MST_customer : String,
    ID_MST_car : String,
    ID_TRN_bill : String
}, {
    collection: 'TRN_purchase_car'
})

var TRN_purchase_car = mongoose.model('TRN_purchase_car', TRN_purchase_car_Schema);
module.exports = TRN_purchase_car;