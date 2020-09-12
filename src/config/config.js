import { config } from "dotenv";
config();

export default {
  SECRET: process.env.KEY_SECRET,
  DB_CONNECTION: process.env.DB_CONNECTION,
};
