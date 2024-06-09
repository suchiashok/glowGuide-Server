/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table("user_products", function (table) {
    table.dropForeign(["season_id"]);
    table.dropColumn("season_id");
    table.string("open_date").nullable().alter();
    table.string("expiration_months").nullable().alter();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table("user_products", function (table) {
    table
      .integer("season_id")
      .unsigned()
      .references("seasons.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("open_date").notNullable().alter();
    table.string("expiration_months").notNullable().alter();
  });
};
