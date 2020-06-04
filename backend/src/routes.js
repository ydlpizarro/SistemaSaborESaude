const { Router } = require('express');
const ClientController = require('./controllers/ClientController');
const SearchController = require('./controllers/SearchClientController');
const MenuController = require('./controllers/MenuController');

const routes = Router();

routes.post('/clientes', ClientController.store);
routes.delete('/clientes', ClientController.destroy);
routes.put('/clientes', ClientController.update);
routes.get('/searchclientes', SearchController.index);
module.exports = routes;