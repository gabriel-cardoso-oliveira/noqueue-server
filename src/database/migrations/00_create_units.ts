import knex from 'knex'

export async function up(knex: knex) {
  return knex.schema.createTable('units', table => {
    table.increments('id').primary()
    table.string('code').notNullable()
    table.string('description').notNullable()
    table.string('image').nullable()
    table.string('email').nullable()
    table.decimal('latitude').notNullable()
    table.decimal('longitude').notNullable()
    table.string('city').notNullable()
    table.string('uf', 2).notNullable()
  });
}

export async function down(knex: knex) {
  return knex.schema.dropTable('units');
}