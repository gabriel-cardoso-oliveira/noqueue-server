import { Request, Response } from 'express'
import knex from './../database/connection'

class EvaluationController {
  async index(request: Request, response: Response) {
    const { unit_id } = request.query

    const evaluation = await knex('evaluation')
      .where('unit_id', Number(unit_id))
      .select('*')

    return response.json(evaluation);
  }

  async create(request: Request, response: Response) {
    const {
      star,
      user_id,
      unit_id
    } = request.body

    const data = {
      star,
      user_id,
      unit_id
    }

    const evaluation = await knex('evaluation').insert(data)

    return response.json({
      id: evaluation[0],
      ...data
    });
  }

  async show(request: Request, response: Response) {
    const { id } = request.params

    const stars = await knex('evaluation')
    .where('unit_id', id)
    .select('star')

    if (!stars) {
      return response.json({
        total: 0
      });
    }

    const total = stars.reduce((a, b) => a.star + b.star);

    return response.json({
      total
    });
  }

  async count(request: Request, response: Response) {
    const { unit_id } = request.query

    const total = await knex('evaluation')
    .where('unit_id', Number(unit_id))
    .count('id')

    return response.json(total);
  }
}

export default EvaluationController;