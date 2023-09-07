const express = require("express");
const { productRouter } = require("./products.routes");
const { categoryRouter } = require("../routes/category.routes");
const { userRouter } = require("../routes/user.routes");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/products", productRouter);
  router.use("/categories", categoryRouter);
  router.use("/users", userRouter);
}

module.exports = { routerApi };
