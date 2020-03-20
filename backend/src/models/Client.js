const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    //id: Number,
    name: String,
    cel: String,
    endereco: String,
    tax: Number
});
module.exports = mongoose.model('client', ClientSchema);