import express from 'express'
import { celebrate, Joi } from 'celebrate'

import UnitsController from './controllers/UnitsController'
import ChartsController from './controllers/ChartsController'
import PasswordsControllers from './controllers/PasswordsController'
import EvaluationController from './controllers/EvaluationController'

const routes = express.Router()

const unitsController = new UnitsController()
const chartsController = new ChartsController()
const passwordsControllers = new PasswordsControllers()
const evaluationController = new EvaluationController()

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
routes.get('/evaluation', evaluationController.index)
routes.get('/evaluation/:id', evaluationController.show)
routes.get('/total/evaluation', evaluationController.count)

routes.post('/evaluation', celebrate({
  body: Joi.object().keys({
    star: Joi.number().required(),
    user_id: Joi.number().required(),
    unit_id: Joi.number().required(),
  })
}), evaluationController.create)

export default routes;