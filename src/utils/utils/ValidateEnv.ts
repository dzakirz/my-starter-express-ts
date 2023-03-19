import "dotenv/config";
import { cleanEnv, str, num } from "envalid";

export const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ["development", "production"] }),
  PORT: num(),
  DATABASE_URL: str(),
  JWT_SECRET: str(),
});
