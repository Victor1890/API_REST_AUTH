import app from "./app";
import "./config/database";

const init = async () => {
  await app.listen(process.env.PORT);
  console.log(`Listen server on port ${process.env.PORT}`);
};

init();
