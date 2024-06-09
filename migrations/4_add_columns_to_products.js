/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table("products", (table) => {
    table.string("size_small");
    table.string("size_medium");
    table.string("size_large");
    table.string("size_standard");
    table.string("brand_link");
    table.string("sephora");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table("products", (table) => {
    table.dropColumn("size_small");
    table.dropColumn("size_medium");
    table.dropColumn("size_large");
    table.dropColumn("size_standard");
    table.dropColumn("brand_link");
    table.dropColumn("sephora");
  });
};
