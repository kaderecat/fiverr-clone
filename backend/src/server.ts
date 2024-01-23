import "dotenv/config";
import mongoose from "mongoose";
import app from "./app";
import env from "./utils/envValidate";

const port = env.PORT;

mongoose.connect(env.MONGO_CONNECTION_STRING).then(() => {
  app.listen(port, () => {
    console.log("Db COnnected");
  });
});
