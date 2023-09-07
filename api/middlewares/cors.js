const cors = require("cors");

const ACCEPTED_ORIGINS = ["https://hoppscotch.io"];

function corsMiddleware({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) {
  return cors({
    origin: (origin, callback) => {
      if (acceptedOrigins.includes(origin) || !origin) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
  });
}

module.exports = { corsMiddleware };
