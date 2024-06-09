const express = require("express");
const seasonsRoutes = require("./routes/seasons-routes");
const productsRoutes = require("./routes/products-routes");
const userProductsRoutes = require("./routes/user_products-routes");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { PORT } = process.env;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  next();
});

app.use("/seasons", seasonsRoutes);
app.use("/products", productsRoutes);
app.use("/userProducts", userProductsRoutes);

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
})
