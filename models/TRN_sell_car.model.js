var mongoose = require('mongoose');

var TRN_sell_car_Schema = mongoose.Schema({
    ID_TRN_sellCar : String,
    sell_car_date : String,
    sell_car_price : Number,
    ID_MST_employeeId : String,
    ID_MST_car : String,
    ID_MST_customer : String,
    ID_TRN_bill : String
}, {
    collection: 'TRN_sell_car'
})

var TRN_sell_car = mongoose.model('TRN_sell_car', TRN_sell_car_Schema);
module.exports = TRN_sell_car;