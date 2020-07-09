const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    id: Number,
    pedido: [{
        idMenu: Number,
        quantidade: Number,
        observacao: String,
    }],
    idCliente: Number,
    status: String
});
module.exports = mongoose.model('order', OrderSchema);