const Order = require('../models/Order');

module.exports = {
    async index(request, response) {
        const orders = await Order.find();
        return response.json(orders);
    },
    async store(request, response) {
        const { id,idcardapio,idquantidade,idcliente,status} = request.body;
        
        let order = await Order.findOne({ id });
        if (!order) {
            order = await Order.create({
                id,
                idcardapio,
                idquantidade,
                idcliente,
                status
            })
            return response.json(order);
        } else {
            return response.json(`Pedido código ${id} já existe!`);
        }
    },
    async destroy(request, response) {
        const { id } = request.query;
        let order = await Order.findOneAndDelete({
            id
        });
        if (order) {
            return response.json({ "message": `Pedido código ${id} deletado` });
        } else {
            return response.json({ "message": `Pedido código ${id} não existe` });
        }
    },
    async update(request, response) {
        const {id,idcardapio,idquantidade,idcliente,status} = request.query;

        let order = await order.findOneAndUpdate({ id }, {
            idcardapio,
            idquantidade,
            idcliente,
            status
        }, {
            new: true,
        });


        if (order) {
            return response.json({ "message": `Pedido código ${id} atualizado` });
        } else {
            return response.json({ "message": `Pedido código ${id} não existe` });
        }
    }
};