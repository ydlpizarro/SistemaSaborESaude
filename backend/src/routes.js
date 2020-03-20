const { Router } = require('express');
const ClientControleer = require('./controllers/ClientController');


const routes = Router();

routes.post('/clientes', ClientControleer.store);

module.exports = routes;