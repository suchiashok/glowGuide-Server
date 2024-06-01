/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("seasons").del();
  await knex("seasons").insert([
    {
      id: 1,
      season_name: 'Spring',
    },
    {
      id: 2,
      season_name: 'Summer',
    },
    {
      id: 3,
      season_name: 'Fall',
    },
    {
      id: 4,
      season_name: 'Winter',
    },
  ]);
};
