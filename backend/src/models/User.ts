import { InferSchemaType, Schema, model } from "mongoose";

const userSchema = new Schema(
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
      default : false
    },
  },
  {
    timestamps: true,
  }
);

type User = InferSchemaType<typeof userSchema>;

export default model<User>("User", userSchema);
