const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    id: Number,
    name: {
        type: String,
        lowercase: true
    },
    cel: String,
    endereco: String,
    tax: Number
});
module.exports = mongoose.model('client', ClientSchema);