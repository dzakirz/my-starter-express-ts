import "module-alias/register";
import { env } from "./utils/utils/ValidateEnv";
import { app } from "./App";

app.listen(env.PORT, () => {
  console.log("running on http://localhost:" + env.PORT);
});
