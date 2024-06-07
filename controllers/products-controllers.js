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
    const [productId] = await knex("products").insert(req.body);
    const newProductItem = await knex("products")
      .where("id", productId)
      .first()
      .select("id", "product_name", "category", "brand", "description");
    return res.status(201).json(newProductItem);
  } catch (error) {
    res.status(500).send(`Error adding a new product`, error);
  }
};

const getProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const data = await knex("products")
      .where("products.id", productId)
      .select("id", "product_name", "brand", "category", "description");
    if (!data.length) {
      res.sendStatus(404);
    } else {
      res.status(200).json(data[0]);
    }
  } catch (error) {
    res.status(500).send(`Error retrieving product details`, error);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const data = await knex("products").select(
      "id",
      "product_name",
      "category",
      "brand",
      "description"
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(`Error retrieving all the products`, error);
  }
};

const getProductsByCategory = async (req,res) => {
  const { category } = req.params;
  console.log(`Category: ${category}`);
  try {
    const data = await knex("products")
    .where("category", category)
    .select(
      "id",
      "product_name",
      "category",
      "brand",
      "description"
    );
    if(!data.length) {
      return res.status(404).json({ message: "No products found for this category" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(`Error retrieving products for category ${category}`, error)
  }
}

module.exports = {
  postProduct,
  getProduct,
  getAllProducts,
  getProductsByCategory,
};
