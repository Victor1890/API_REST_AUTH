import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/api_rest_auth", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then((db) => console.log(`Db is connect`))
  .catch((error) => console.log(`Error in connect the Db`));
