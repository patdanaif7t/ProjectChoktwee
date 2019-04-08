var mongoose = require('mongoose');

var MST_customer_Schema = mongoose.Schema({
    ID_MST_customer : String,
    customer_type : String,
    customer_citizen_id : String,
    customer_first_name : String,
    customer_last_name : String,
    address : {
        address_id : String,
        bloc : String,
        district : String,
        sub_district : String,
        province : String,
        postcode : String 
    },
    customer_telephone : String,
    customer_email : String
}, {
    collection: 'MST_customer'
})

var MST_customer = mongoose.model('MST_customer', MST_customer_Schema);
module.exports = MST_customer;