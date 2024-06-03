const knex = require("knex")(require("../knexfile"));

const postProduct = async (req, res) => {
  const { product_name, category, brand, description } = req.body;

  if (!req.body) {
    return res.status(400).json("All fields are required");
  }
  if (!req.body.product_name) {
    return res.status(400).json("Product name is required");
  }
  if (!req.body.category) {
    return res.status(400).json("Category is required");
  }
  if (!req.body.brand) {
    return res.status(400).json("Brand is required");
  }
  if (!req.body.description) {
    return res.status(400).json("Description is required");
  }

  try {
    const [id] = await knex("products").insert(req.body);
    const newProductItem = await knex("products")
      .where("id", id)
      .first()
      .select("id", "product_name", "category", "brand", "description");
    return res.status(201).json(newProductItem);
  } catch (error) {
    res.status(500).send(`Error adding a new product`, error);
  }
};

module.exports = {
  postProduct,
};
