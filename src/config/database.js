import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/api_rest-auth", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then((db) => console.log(`Db is connect`))
  .catch((error) => console.log(`Error in connect the Db`));
