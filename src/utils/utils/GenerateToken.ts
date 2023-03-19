import jwt from "jsonwebtoken";
import { env } from "./ValidateEnv";

export const generateToken = (id: any) => {
  return jwt.sign({ id }, env.JWT_SECRET, {
    expiresIn: "1h",
  });
};
