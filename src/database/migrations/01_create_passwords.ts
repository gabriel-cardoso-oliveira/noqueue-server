import knex from 'knex'

export async function up(knex: knex) {
  return knex.schema.createTable('passwords', table => {
    table.increments('id').primary()
    table.string('code').notNullable()
    table.string('status').notNullable()
    table.string('sector').notNullable()
    table.date('date').notNullable()
    table.time('hour').notNullable()
    table.time('start').nullable()
    table.time('end').nullable()
    table.integer('unit_id')
      .notNullable()
      .references('id')
      .inTable('units')
  });
}

export async function down(knex: knex) {
  return knex.schema.dropTable('passwords');
}