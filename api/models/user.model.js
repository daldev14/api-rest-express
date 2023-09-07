const { randomUUID } = require("node:crypto");
const { filterData } = require("../utils");

const data = require("../data/users.json");
let USERS_DATA = [...data];

class UserModel {
  static async getAll({ limit, offset } = {}) {
    let users = [...USERS_DATA];

    if (Number(limit) || Number(offset)) {
      users = await filterData({ data: users, limit, offset });
    }

    return users;
  }

  static async getById({ id }) {
    return USERS_DATA.find((item) => item.id === id);
  }

  static async create({ input }) {
    const newUser = {
      id: randomUUID(),
      ...input,
      creationAt: new Date(),
      updatedAt: new Date(),
    };

    USERS_DATA.push(newUser);

    return {
      message: "User Created",
      user: newUser,
    };
  }

  static async update({ id, input }) {
    if (!USERS_DATA.some((item) => item.id === id)) return false;

    USERS_DATA = USERS_DATA.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          ...input,
          updatedAt: new Date(),
        };
      }

      return item;
    });

    const user = USERS_DATA.find((item) => item.id === id);

    return {
      message: "User Updated",
      user,
    };
  }

  static async delete({ id }) {
    if (!USERS_DATA.some((item) => item.id === id)) return false;

    USERS_DATA = USERS_DATA.filter((item) => item.id !== id);

    return {
      message: "User Deleted",
      id,
    };
  }
}

module.exports = { UserModel };
