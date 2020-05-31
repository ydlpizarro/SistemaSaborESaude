const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    id: Number,
    name: {
        type: String,
        lowercase: true
    },
    calorias: Number,
    valor: Number
});
module.exports = mongoose.model('menu', MenuSchema);