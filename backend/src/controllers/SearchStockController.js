const Stock = require('../models/Stock');

module.exports = {
    async index(request, response) {
        const { id } = request.query;
        const stocks = await Stock.find({
            id
        });
        return response.json({ stocks });
    }
}