/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user_products").del();
  await knex("user_products").insert([
    {
      id: 1,
      product_id: 2,
      season_id: 2,
      open_date: "10/12/2023",
      expiration_months: "6",
    },
  ]);
};
