const express = require("express");
const categoryRouter = express.Router();
const { CategoryController } = require("../controllers/category.controller");

// --> category
categoryRouter.get("/", CategoryController.getAll);
categoryRouter.get("/:name", CategoryController.getByName);

module.exports = { categoryRouter };
