/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('tb_users', (table) => {
    table.increments().primary();
    table.string('username').unique().notNullable();
    table.string('email').unique().notNullable().comment('This is the email field');
    table.string('password').unique().notNullable();
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('tb_users');
};
