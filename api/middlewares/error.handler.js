function logError(error, request, response, next) {
  console.log("logError");
  console.log(error);
  next(error);
}

function errorHandler(error, request, response, next) {
  console.log("errorHanlder");

  response.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

module.exports = { logError, errorHandler };
