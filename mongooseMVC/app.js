const express = require('express');
const cors = require('cors');
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

//cors
app.use(cors());


const {router} = require('./Routes/emp.Routes');

app.use('/', router);

app.listen(3002, ()=>{
    console.log("Listening on..");
})