const { ProductModel } = require("../models/product.model");

class ProductController {
  static async getAll(req, res, next) {
    const { limit, offset } = req.query;

    try {
      const products = await ProductModel.getAll({ limit, offset });
      if (!products) throw new Error(`No products 😕`);

      res.json(products);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    const { id } = req.params;

    try {
      const product = await ProductModel.getById({ id });
      if (!product) throw new Error("Product not found 😕");

      res.json(product);
    } catch (error) {
      next(error);
    }
  }

  static async getByCategory(req, res, next) {
    const { category } = req.params;

    try {
      const products = await ProductModel.getByCategory({ category });
      if (!products)
        throw new Error(`Products with category ${category} not found 😕`);

      res.json(products);
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res) {
    const { body } = req;
    const product = await ProductModel.create({ input: body });

    res.json(product);
  }

  static async update(req, res, next) {
    const { body } = req;
    const { id } = req.params;

    try {
      const product = await ProductModel.update({ id, input: body });
      if (!product) throw new Error("Product not found 😕");

      res.json(product);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    const { id } = req.params;

    try {
      const product = await ProductModel.delete({ id });
      if (!product) throw new Error("Product not found 😕");

      res.json(product);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = { ProductController };
