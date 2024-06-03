const knex = require("knex")(require("../knexfile"));

const getAllSeasons = async (req, res) => {
  try {
    const data = await knex("seasons").select("id", "season_name");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(`Error retrieving the seasons`, error);
  }
};

module.exports = {
    getAllSeasons
};