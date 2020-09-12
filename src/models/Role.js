import { Schema, model } from "mongoose";

export const ROLES = ["user", "admin", "moredator"];

const rolesSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default model("Roles", rolesSchema);
