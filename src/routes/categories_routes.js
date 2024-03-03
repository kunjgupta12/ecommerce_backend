const CategoryRoutes = require('express').Router();
const CategoryController = require('./../controller/category_conbtroller');

CategoryRoutes.get("/", CategoryController.fetchAllCategories);


CategoryRoutes.post("/", CategoryController.createCategory);



CategoryRoutes.get("/:id", CategoryController.fetchCategoryById);

module.exports = CategoryRoutes;