const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
    id: Number,
    quantidade: Number,
    status: String
});
module.exports = mongoose.model('stock', StockSchema);