var mongoose = require('mongoose');

var MST_car_Schema = mongoose.Schema({
    ID_MST_car : String,
    car_company : String,
    car_model : String,
    car_color : String,
    car_license : String,
    car_status : String,
    car_year : Number,
    car_repair_cost : Number,
    car_cost: Number,
    car_price_sell : Number
}, {
    collection: 'MST_car'
})

var MST_car = mongoose.model('MST_car', MST_car_Schema);
module.exports = MST_car ;