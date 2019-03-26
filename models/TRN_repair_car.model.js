var mongoose = require('mongoose');

var TRN_repair_car_Schema = mongoose.Schema({
    ID_TRN_repair_car : {type: String},
    repair_detail : {type: String},
    repair_received_date : {type: Date, default:Date.now()}, 
    repair_return_date : {type: String}, 
    repair_status : {type: String}, 
    car_license : {type: String}, 
    repair_car_price : {type: String},
    ID_MST_customer : {type: String},
    ID_TRN_bill : {type: String},
    ID_MST_employeeId : {type: String},
    reapair_detail : [{
        ID_MST_employeeId: {type: String},
        replacement_parts : {type: String},
        repair_problem : {type: String},
        repair_date : {type: String}, 
        repair_cost_technician : {type: String},
        repair_cost_parts : {type: String}
    }]
}, {
    collection: 'TRN_repair_car'
})

var TRN_repair_car = mongoose.model('TRN_repair_car', TRN_repair_car_Schema);
module.exports = TRN_repair_car;