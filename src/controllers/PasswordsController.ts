import { Request, Response } from 'express'
import knex from './../database/connection'

interface Passwords {
  code: string;
  status: string;
  sector: string;
  date: string;
  hour: string;
  start: string;
  end: string;
  unit_id: number;
}

class PasswordsControllers {
  async show(request: Request, response: Response) {
    const { id } = request.params

    const password = await knex('passwords').where('id', id).first()

    if (!password) {
      return response.status(400).json({ message: 'Password not fauld.' });
    }

    return response.json(password);
  }

  async create(passwords: Passwords) {
    const insertedIds = await knex('passwords').insert(passwords)

    return insertedIds[0];
  }

  async update(passwords: Passwords) {
    const insertedIds = await knex('passwords')
      .update(passwords)
      .where('code', String(passwords.code))
      .where('sector', String(passwords.sector))
      .where('date', String(passwords.date))
      .where('hour', String(passwords.hour))

    return insertedIds;
  }

  async countPassword() {
    const QUERY = `SELECT unit_id, COUNT(*) as total
    FROM passwords WHERE status <> 'encerrado'
    GROUP BY unit_id
    ORDER BY unit_id
    `

    const data = await knex.raw(QUERY)

    return data;
  }
}

export default PasswordsControllers;