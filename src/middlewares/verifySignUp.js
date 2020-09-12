import { ROLES } from "../models/Role";
import User from "../models/User";

export const checkRoleExisted = (req, res, next) => {
  const { roles } = req.body;
  if (roles) {
    for (let i = 0; i < roles.length; i++) {
      if (!ROLES.includes(roles[i])) {
        return res.status(400).json({
          message: `Role ${roles[i]} does exists`,
        });
      }
    }
  }
  next();
};

export const checkDuplicateUserEmail = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (user) return res.status(400).json({ message: `The user already exists` });

  next();
};
