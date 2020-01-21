const { Router } = require('express');

const DevController =  require('./controllers/DevController');
const SearchController = require('./controllers/SearchController')

const routes = Router();
// Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmentros:
// Query params: request.query(Filtros, ordenação, paginação, ...)
// Route params: resquest.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)
routes.delete('/devs', DevController.destroy)
routes.put('/devs', DevController.update)

routes.get('/search', SearchController.index)

module.exports = routes;