// Car.model.js


var mongoose = require('mongoose');
// Schema Validation
var CarSchema = mongoose.Schema({
    ID_MST_car: {type: String},
    car_company: {type: String},
    car_model: {type: String},
    car_price: {type: Number},
    car_year: {type: Number},
    car_color: {type: String},
    car_license: {type: String},
    car_repair_cost: {type: Number},
    car_status: {type: String},
    car_cost: {type: Number},
    car_price_sell: {type: Number},
},{
    collection: 'MST_car'
});

var Car = mongoose.model('Car', CarSchema);
module.exports = Car;