const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:0804783108za@ds117846.mlab.com:17846/choktwee');

const MangeEmpRouter = require('./routes/MangeEmpRouter');
const LoginRouter = require('./routes/LoginRouter');
const MangeCarRouter = require('./routes/MangeCarRouter');
const CustomerRouter = require ('./routes/CustomerRouter');
const MangeSellCarRouter = require ('./routes/MangeSellCarRouter');
const MangeBuyCarRouter = require ('./routes/MangeBuyCarRouter');
const MangereNewLicense = require ('./routes/ManageReNewLicenseRouter')
const ReportRouter = require ('./routes/ReportRouter')
const RepairRouter = require('./routes/ManageRepairRouter')

app.use(express.static('public'));
app.set('view engine', 'ejs');
   
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
 
app.use('/mangeemployee', MangeEmpRouter);
app.use ('/login', LoginRouter );
app.use ('/mangecar', MangeCarRouter)
app.use ('/customer', CustomerRouter)
app.use ('/sellcar', MangeSellCarRouter)
app.use ('/buycar', MangeBuyCarRouter)
app.use ('/renewlicense', MangereNewLicense)
app.use ('/report', ReportRouter)
app.use('/manage-repair', RepairRouter)

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,'public', 'index.html'));
});




app.listen(port, function(){
  console.log('เริ่มการทำงาน', port);
});