import { Request, Response } from 'express'
import knex from './../database/connection'

interface Hour {
  hour: string;
  total: number;
}

interface Week {
  week_day: string;
  total: number;
}

class ChartsController {
  async timeDay(request: Request, response: Response) {
    const { id } = request.params

    const QUERY = `SELECT strftime('%H', hour) AS hour, COUNT(*) AS total
    FROM passwords WHERE unit_id = ? AND status = 'encerrado'
    GROUP BY strftime('%H', hour)
    ORDER BY strftime('%H', hour)
    `

    const data = await knex.raw(QUERY, [id])

    const result = {
      labels: data.map((res: Hour) => `${res.hour}h`),
      datasets: [{
        data: data.map((res: Hour) => res.total),
      }]
    }

    return response.json(result);
  }

  async weekDay(request: Request, response: Response) {
    const { id } = request.params

    const QUERY = `SELECT strftime('%w', date) AS week_day, COUNT(*) AS total
    FROM passwords WHERE unit_id = ? AND status = 'encerrado'
    GROUP BY strftime('%w', date)
    ORDER BY strftime('%w', date)
    `

    const data = await knex.raw(QUERY, [id])

    data.map((res: Week) => {
      switch(res.week_day) {
        case '1':
          res.week_day = 'SEG';
          break;
        case '2':
          res.week_day = 'TER';
          break;
        case '3':
          res.week_day = 'QUA';
          break;
        case '4':
          res.week_day = 'QUI';
          break;
        case '5':
          res.week_day = 'SEX';
          break;
      }
    })

    const result = {
      labels: data.map((res: Week) => res.week_day),
      datasets: [{
        data: data.map((res: Week) => res.total),
      }]
    }

    return response.json(result);
  }

  async countPassword(request: Request, response: Response) {
    const QUERY = `SELECT unit_id, COUNT(*) as total
    FROM passwords WHERE status <> 'encerrado'
    GROUP BY unit_id
    ORDER BY unit_id
    `

    const data = await knex.raw(QUERY)

    return response.json(data);
  }
}

export default ChartsController;