const { UserModel } = require("../models/user.model");

class UserController {
  static async getAll(req, res, next) {
    const { limit, offset } = req.query;

    try {
      const users = await UserModel.getAll({ limit, offset });
      if (!users) throw new Error(`No users 😕`);

      res.json(users);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    const { id } = req.params;

    try {
      const user = await UserModel.getById({ id });
      if (!user) throw new Error("User not found 😕");

      res.json(user);
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res) {
    const { body } = req;
    const newUser = await UserModel.create({ input: body });

    res.json(newUser);
  }

  static async update(req, res, next) {
    const { body } = req;
    const { id } = req.params;

    try {
      const user = await UserModel.update({ id, input: body });
      if (!user) throw new Error("User not found 😕");

      res.json(user);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    const { id } = req.params;

    try {
      const user = await UserModel.delete({ id });
      if (!user) throw new Error("User not found 😕");

      res.json(user);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = { UserController };
