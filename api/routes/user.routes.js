const express = require("express");
const { UserController } = require("../controllers/user.controlller");
const userRouter = express.Router();

userRouter.get("/", UserController.getAll);
userRouter.get("/:id", UserController.getById);
userRouter.post("/", UserController.create);
userRouter.patch("/:id", UserController.update);
userRouter.delete("/:id", UserController.delete);

module.exports = { userRouter };
