const knex = require("knex")(require("../knexfile"));

const getUserProducts = async (req, res) => {
  try {
    const data = await knex("user_products")
      .join("products", "user_products.product_id", "products.id")
      .select(
        "user_products.id",
        "user_products.open_date",
        "user_products.expiration_months",
        "products.id as product_id",
        "products.product_name as product_name",
        "products.brand as product_brand",
        "products.description as product_description"
      );
    res.status(200).json(data);
  } catch (error) {
    console.log("Error fetching user products", error);
    res.status(500).send("An error occured");
  }
};

const addUserProducts = async (req, res) => {
  try {
    const { productId, openDate, expirationMonths } = req.body;
    await knex("user_products").insert({
      product_id: productId,
      open_date: openDate,
      expiration_months: expirationMonths,
    });
    res.status(201).send("User Product added successfully");
  } catch (error) {
    console.log("Error adding user product", error);
    res.status(500).send("An error occurred while adding user product");
  }
};
module.exports = {
  getUserProducts,
  addUserProducts,
};
