import { InferSchemaType, Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    gigId: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sellerId: {
      type: String,
      required: true,
    },
    buyerId: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    payment_intent: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

type Order = InferSchemaType<typeof orderSchema>;

export default model<Order>("Order", orderSchema);
