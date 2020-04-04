const express = require("express");
const {celebrate, Joi, Segments} = require('celebrate');
const OngController = require('./controllers/OngsController');
const IncidentControlelr = require('./controllers/IncidentControlelr');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Get e Post das Ongs  
routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
   [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required(),
        email: Joi.string().required().email(),
        whats: Joi.string().required().min(12).max(12),
        cidade: Joi.string().required(),
        uf: Joi.string().required().length(2)
   })
}) , OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index); 

routes.post('/sessions', SessionController.create)

routes.post('/incidents', IncidentControlelr.create);
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentControlelr.index);
routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentControlelr.delete);

module.exports = routes;

/*
    http://localhost:3333/ongs
*/