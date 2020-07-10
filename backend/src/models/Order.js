const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    id: Number,
    idcardapio:Number,
    idquantidade:Number,
    idcliente: Number,
    status: String
});
module.exports = mongoose.model('order', OrderSchema);