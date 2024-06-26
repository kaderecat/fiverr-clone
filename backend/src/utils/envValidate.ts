import { cleanEnv } from "envalid";
import { port, str } from "envalid/dist/validators";

export default cleanEnv(process.env, {
  PORT: port(),
  MONGO_CONNECTION_STRING: str(),
  JWT_KEY : str(),
  STRIPE_KEY : str()
});
