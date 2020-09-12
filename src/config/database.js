import mongoose from "mongoose";
import config from "./config";

mongoose
  .connect(config.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then((db) => console.log(`Db is connect`))
  .catch((error) => console.log(`Error in connect the Db`));
