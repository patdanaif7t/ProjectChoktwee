// Emp.model.js


var mongoose = require('mongoose');
// Schema Validation
var userSchema = mongoose.Schema({
    
    ID_MST_employeeId : {type: String},
    employee_type: {type: String},
    employee_first_name : String,
    employee_last_name: String,
    employee_citizen_id : String,
    employee_gender : String,
    employee_telephone : String,
    employee_salary : Number,
    employee_birthday : String,
    username : String,
    password : String,
    address : {
        address_id : String,
        bloc : String,
        district : String,
        sub_district : String,
        province : String,
        postcode : String 
    }
    

},{
    collection: 'MST_employee'
});

var User = mongoose.model('User', userSchema);
module.exports = User;