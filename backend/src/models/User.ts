import { InferSchemaType, Schema, model } from "mongoose";
import { UserInterface } from "../interfaces/User";
const userSchema = new Schema<UserInterface>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,

    },
    img: {
      type: String,
    },
    country: {
      type: String,
    },
    phone: {
      type: String,
    },
    desc: {
      type: String,
    },
    isSeller: {
      type: Boolean,
      default: false,
    },
   
  },
  {
    timestamps: true,
  }
);

type User = InferSchemaType<typeof userSchema>;

export default model<User>("User", userSchema);
