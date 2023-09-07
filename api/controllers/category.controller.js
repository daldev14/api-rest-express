const { CategoryModel } = require("../models/category.model");

class CategoryController {
  static async getAll(req, res, next) {
    const { limit, offset } = req.query;

    try {
      const categories = await CategoryModel.getAll({ limit, offset });
      if (!categories.length) throw new Error(`No categories 😕`);

      res.json(categories);
    } catch (error) {
      next(error);
    }
  }

  static async getByName(req, res, next) {
    const { name } = req.params;

    try {
      const category = await CategoryModel.getByName({ name });
      if (!category) throw new Error(`Category not found 😕`);

      res.json(category);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = { CategoryController };
