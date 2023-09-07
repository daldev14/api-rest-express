const express = require("express");
const path = require("path");
const { corsMiddleware } = require("./middlewares/cors");
const { routerApi } = require("./routes/index");
const { logError, errorHandler } = require("./middlewares/error.handler");

const app = express();

app.disable("x-powered-by");
app.use(express.json());
app.use(corsMiddleware());
app.use(express.static(path.join(__dirname, "../public")));

const PORT = process.env.PORT ?? 3000;

app.get("/api/v1/data", (req, res) => {
  res.json({ message: "Welcome to my express server" });
});

app.post("/api/v1/data", (req, res) => {
  const { body } = req;

  res.json(body);
});

routerApi(app);

app.use(logError);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listen on port http://localhost:${PORT}`);
});
