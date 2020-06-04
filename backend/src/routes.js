const express = require('express');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

// Routes Session/Login
routes.post('/sessions', SessionController.create);

// Routes Ong
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// Routes Profile
routes.get('/profile', ProfileController.index);

// Routes Incidents
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
