import knex from 'knex';

export async function up(knex: knex) {
  return knex.schema.createTable('evaluation', table => {
    table.increments('id').primary()
    table.integer('star').notNullable()
    table.integer('user_id').notNullable()
    table.integer('unit_id')
      .notNullable()
      .references('id')
      .inTable('units')
  });
}

export async function down(knex: knex) {
  return knex.schema.dropTable('evaluation');
}