const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    id: Number,
    idCardapio0: Number,
    idQuantidade0: Number,
    idCardapio1: Number,
    idQuantidade1: Number,
    idCardapio2: Number,
    idQuantidade2: Number,
    idCardapio3: Number,
    idQuantidade3: Number,
    idCardapio4: Number,
    idQuantidade4: Number,
    idCliente: Number,
    status: String
});
module.exports = mongoose.model('order', OrderSchema);