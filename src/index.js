import "./config/database";
import app from "./app";

const init = async () => {
  await app.listen(3000);
  console.log(`Listen server on port ${3000}`);
};

init();
