import { Request, Response } from 'express'
import knex from './../database/connection'
import crypto from 'crypto'

class UnitsController {
  async index(request: Request, response: Response) {
    const { city, uf } = request.query

    const units = await knex('units')
      .where('city', String(city))
      .where('uf', String(uf))
      .select('*')

    return response.json(units);
  }

  async create(request: Request, response: Response) {
    const {
      description,
      image,
      email,
      latitude,
      longitude,
      city,
      uf
    } = request.body

    const data = {
      code: crypto.randomBytes(6).toString('hex'),
      description,
      image,
      email,
      latitude,
      longitude,
      city,
      uf
    }

    const unit = await knex('units').insert(data)

    return response.json({
      id: unit[0],
      ...data
    });
  }

  async show(request: Request, response: Response) {
    const { id } = request.params

    const unit = await knex('units').where('id', id).first()

    if (!unit) {
      return response.status(400).json({ message: 'Unit not fauld.' });
    }

    return response.json(unit);
  }
}

export default UnitsController;