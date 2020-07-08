const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    id: Number,
    pedido: [{
        idMenu: Number,
        valorPedido: Number,
        quantidade: Number,
        observacao: String
    }],
    idCliente: Number
});
module.exports = mongoose.model('order', OrderSchema);