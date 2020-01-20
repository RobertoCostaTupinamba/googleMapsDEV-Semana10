const { Router } = require('express');
const axios = require('axios');
const Dev =  require('./models/Dev')

const routes = Router();
// Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmentros:
// Query params: request.query(Filtros, ordenação, paginação, ...)
// Route params: resquest.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)
routes.post('/devs', async (request, response) => {
    const {github_username, techs, latitude, longitude} = request.body;
    
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const {name = login, avatar_url, bio } =  apiResponse.data
    //trim remove espaço antes e depois de uma sting
    const techsArray = techs.split(',').map(tech => tech.trim());

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
    }
    
    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
    })

    return response.json(dev);
})

module.exports = routes;