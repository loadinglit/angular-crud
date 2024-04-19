const mongoose = require('mongoose');

//mongoose connection
mongoose.connect('mongodb://127.0.0.1:27017/comp').then(() => {
    console.log("Connected to Mongo..");
}).catch((err) => {
    console.log(err);
});

//mongo schema 
const empSchema = new mongoose.Schema({
    id : Number,
    Name: String,
    Salary : Number
});

// storing in model
const empModel = new mongoose.model('emp', empSchema);

module.exports = {empModel}