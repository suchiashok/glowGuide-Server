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
        "products.category as product_category",
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

const updateUserProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { openDate, expirationMonths } = req.body;
    if (!openDate || !expirationMonths) {
      return res
        .status(400)
        .send("openDate and expirationMonths are required.");
    }

    await knex("user_products").where({ id }).update({
      open_date: openDate,
      expiration_months: expirationMonths,
    });

    res.status(200).send("User Product updated successfully");
  } catch (error) {
    console.log("Error updating user product", error);
    res.status(500).send("An error occurred while updating user product");
  }
};

const deleteUserProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await knex("user_products").where({ id }).del();

    if(deleted) {
      res.status(200).send(`User Product with id ${id} deleted successfully`)
    } else {
      res.status(404).send("User Product not found")
    }
  } catch (error) {
    console.error("Error deleting user product:", error);
    res.status(500).send("An error occurred while deleting user product");
  }
};

module.exports = {
  getUserProducts,
  addUserProducts,
  updateUserProduct,
  deleteUserProduct,
};
