import express from 'express'
import { celebrate, Joi } from 'celebrate'

import UnitsController from './controllers/UnitsController'
import ChartsController from './controllers/ChartsController'
import PasswordsControllers from './controllers/PasswordsController'

const routes = express.Router()

const unitsController = new UnitsController()
const chartsController = new ChartsController()
const passwordsControllers = new PasswordsControllers()

routes.get('/units', unitsController.index)
routes.get('/units/:id', unitsController.show)
routes.post('/units', celebrate({
  body: Joi.object().keys({
    description: Joi.string().required(),
    image: Joi.string(),
    email: Joi.string().required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    city: Joi.string().required(),
    uf: Joi.string().max(2),
  })
}), unitsController.create)

routes.get('/charts/hour/:id', chartsController.timeDay)
routes.get('/charts/week/:id', chartsController.weekDay)

routes.get('/passwords/count', chartsController.countPassword)

routes.get('/passwords/:id', passwordsControllers.show)

export default routes;