import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config/config";
import Role from "../models/Role";

export const signUp = async (req, res) => {
  console.log(req.body);
  const { username, email, password, roles } = req.body;

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  });

  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "user" });
    newUser.roles = [role._id];
  }

  const savedUser = await newUser.save();

  console.log(savedUser);

  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 60 * 60 * 48,
  });

  return res.json({ savedUser, token });
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  const userFound = await User.findOne({ email }).populate("roles");

  if (!userFound) return res.status(404).json({ message: "User not found" });

  const matchPassword = await User.comparePassword(
    password,
    userFound.password
  );
  if (!matchPassword)
    return res.status(401).json({ token: null, message: "Invalid password" });

  console.log(userFound);

  res.json(userFound);
};
