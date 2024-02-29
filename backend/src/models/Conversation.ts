import { InferSchemaType, Schema, model } from "mongoose";

const conversationSchema = new Schema(
  {
    id: {
      type: String,
    },
    buyerId: {
      type: String,
      required: true,
    },
    sellerId: {
      type: String,
      required: true,
    },
    readByBuyer: {
      type: Boolean,
      required: true,
    },
    readBySeller: {
      type: Boolean,
      required: true,
    },
    lastMessage: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

type Conversation = InferSchemaType<typeof conversationSchema>;

export default model<Conversation>("Conversation", conversationSchema);
