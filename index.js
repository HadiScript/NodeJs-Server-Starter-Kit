const { app } = require("./src/app");
const connectDB = require("./src/config/datebase/db");

require("dotenv").config();

const startUp = async () => {
  await connectDB();
  app.listen(process.env.PORT || 8080, () => {
    console.log("Listening on port 8080!");
  });
};

startUp();
