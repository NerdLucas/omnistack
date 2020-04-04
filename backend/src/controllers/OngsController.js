const conection = require("../database/connection");
const crypto = require("crypto");
const generatorUniqueId = require("../utils/generatorUniqueId");
module.exports = {
    async index(request, response) {
        const ongs = await(conection('ongs').select('*'));
    
        return response.json(ongs);
    },


    async create(request, response) {
        const {nome, email, whats, cidade, uf} = request.body;
    
        const id = generatorUniqueId();
        
        await conection('ongs').insert({
            id,
            nome, 
            email, 
            whats,
            cidade, 
            uf,
        })
    
        return response.json({id})
    }
}