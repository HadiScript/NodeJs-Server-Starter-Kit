require("express-async-errors");

const cors = require("cors");
const express = require("express");
const { json } = require("body-parser");
const cookieSession = require("cookie-session");
const corsOptions = require("./config/cors/options");
const { errorHandler } = require("./middlewares/error-handler");
const { NotFoundError } = require("./errors/not-found-error");


const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(cors(corsOptions));
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

// APIS

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

module.exports = { app };
