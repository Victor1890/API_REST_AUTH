import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config/config";

export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body;

  const newUser = new User({
    username,
    email,
    password: User.encryptPassword(password),
  });

  const saveUser = await newUser.save();

  const token = jwt.sign({ id: saveUser._id }, config.SECRET, {
    expiresIn: 60 * 60 * 48,
  });

  return res.json({ saveUser, token });
};

export const signIn = async (req, res) => {
  console.log(req.body);
};
