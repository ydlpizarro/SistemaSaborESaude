const Stock = require('../models/Stock');

module.exports = {
    async store(request, response) {
        const { id, quantidade, status } = request.body;
        let stock = await Stock.findOne({ id });
        if (!stock) {
            stock = await Stock.create({
                id,
                quantidade,
                status
            })
            return response.json(stock);
        } else {
            return response.json(`Item código ${id} já existe!`);
        }
    },
    async destroy(request, response) {
        const { id } = request.query;
        let stock = await Stock.findOneAndDelete({
            id
        });
        if (stock) {
            return response.json({ "message": `Item código ${id} deletado` });
        } else {
            return response.json({ "message": `Item código ${id} não existe` });
        }
    },
    async update(request, response) {
        const { id, quantidade, status } = request.query;
        let stock = await stock.findOneAndUpdate({ id }, {
            quantidade,
            status
        }, {
            new: true,
        });
        if (stock) {
            return response.json({ "message": `Item código ${id} atualizado` });
        } else {
            return response.json({ "message": `Item código ${id} não existe` });
        }
    }
};