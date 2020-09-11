import { Schema, model } from "mongoose";
import router from "../routes/auth.routes";

const rolesSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default model("Roles", rolesSchema);
