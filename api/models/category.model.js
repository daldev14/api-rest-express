const { filterData } = require("../utils");

const data = require("../data/categories.json");
const CATEGORIES_DATA = [...data];

class CategoryModel {
  static async getAll({ limit, offset } = {}) {
    let categories = CATEGORIES_DATA;

    if (Number(limit) || Number(offset)) {
      categories = await filterData({ data: categories, limit, offset });
    }

    return categories;
  }

  static async getByName({ name }) {
    return CATEGORIES_DATA.find((item) => item.name === name);
  }
}

module.exports = { CategoryModel };
