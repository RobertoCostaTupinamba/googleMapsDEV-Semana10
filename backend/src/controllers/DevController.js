const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const findOne = require('../utils/findOne');

// controller costuma ter 5 funções no maximo:
//Index - Mostrar uma lista de recursos
//Show - Mostrar um unico recurso
//Store - Criar um recurso
//Update - Atualizar um recurso
//Destroy - Destruir um recurso

module.exports = {
    async index(request, response){
        const devs = await Dev.find(); //Utilizando filtros Dev.find({ name: 'Diego'})
        return response.json(devs)
    },
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await findOne({github_username});

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name = login, avatar_url, bio } = apiResponse.data
            
            const techsArray = parseStringAsArray(techs)

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })

        }
        return response.json(dev);
    },
    async destroy(request, response){
        const {github_username}= request.body;
        let dev = await findOne({github_username})
        if(dev){
            dev.remove();  
            response.json("Sucesso")   
        }else{
          response.json("Usuario do git não encontrado")  
        }
    },
    async update(request, response){
        console.log(request.body);
        const { github_username, name , update} = request.body;
        let att = {update}

        let a = await Dev.findOneAndUpdate({github_username}, att.update)
        response.json(dev=[])
    }
}