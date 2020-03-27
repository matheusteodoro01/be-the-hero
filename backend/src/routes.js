const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngControllers')
const IncidenController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

routes.post('/sessions',SessionController.create)

routes.get('/ongs',OngController.index)

routes.post('/ongs',OngController.create)

routes.get('/profile',ProfileController.index)

routes.get('/incidents',IncidenController.index)
routes.post('/incidents',IncidenController.create)
routes.delete('/incidents/:id',IncidenController.delete)


module.exports = routes