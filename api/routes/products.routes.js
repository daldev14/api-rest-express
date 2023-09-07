const express = require("express");
const productRouter = express.Router();
const { ProductController } = require("../controllers/products.controller");

productRouter.get("/", ProductController.getAll);
productRouter.get("/:id", ProductController.getById);
productRouter.get("/category/:category", ProductController.getByCategory);
productRouter.post("/", ProductController.create);
productRouter.patch("/:id", ProductController.update);
productRouter.delete("/:id", ProductController.delete);

module.exports = { productRouter };
