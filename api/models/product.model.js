const { randomUUID } = require("node:crypto");
const { filterData } = require("../utils");

const data = require("../data/products.json");
let PRODUCTS_DATA = [...data];

class ProductModel {
  static async getAll({ limit, offset } = {}) {
    let products = [...PRODUCTS_DATA];
    if (!products.length) return false;

    if (Number(limit) || Number(offset)) {
      products = await filterData({ data: products, limit, offset });
    }

    return {
      message: "List of products",
      products,
    };
  }

  static async getById({ id }) {
    return PRODUCTS_DATA.find((item) => item.id === id);
  }

  static async getByCategory({ category }) {
    const categories = PRODUCTS_DATA.filter(
      (item) => item.category === category
    );
    if (!categories.length) return false;

    return categories;
  }

  static async create({ input }) {
    const newProduct = {
      id: randomUUID(),
      ...input,
      creationAt: new Date(),
      updatedAt: new Date(),
    };

    PRODUCTS_DATA.push(newProduct);

    return {
      message: "Product created",
      newProduct,
    };
  }

  static async update({ id, input }) {
    if (!PRODUCTS_DATA.some((item) => item.id === id)) return false;

    PRODUCTS_DATA = PRODUCTS_DATA.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          ...input,
          updatedAt: new Date(),
        };
      }

      return item;
    });

    const changeProduct = PRODUCTS_DATA.find((item) => item.id === id);

    return {
      message: "Product Updated",
      product: changeProduct,
    };
  }

  static async delete({ id }) {
    if (!PRODUCTS_DATA.some((item) => item.id === id)) return false;

    const productDeleted = PRODUCTS_DATA.find((item) => item.id === id);
    PRODUCTS_DATA = PRODUCTS_DATA.filter((item) => item.id !== id);

    return {
      message: "Product Deleted",
      product: productDeleted,
    };
  }
}

module.exports = { ProductModel };
