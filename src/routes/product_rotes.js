const ProductRoutes = require("express").Router();
const ProductController = require("./../controller/product_controller");

ProductRoutes.get("/", ProductController.fetchAllProducts);
ProductRoutes.post("/", ProductController.createProduct);
ProductRoutes.get("/category/:id", ProductController.fetchAllProductByCategory);

module.exports = ProductRoutes;
