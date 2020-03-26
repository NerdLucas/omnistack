const express = require("express");

const OngController = require('./controllers/OngsController');
const IncidentControlelr = require('./controllers/IncidentControlelr');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Get e Post das Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index); 

routes.post('/sessions', SessionController.create)

routes.post('/incidents', IncidentControlelr.create);
routes.get('/incidents', IncidentControlelr.index);
routes.delete('/incidents/:id', IncidentControlelr.delete);

module.exports = routes;

/*
    http://localhost:3333/ongs
*/