import { InferSchemaType, Schema, model } from "mongoose";

const messageSchema = new Schema(
  {
    conversationId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

type Message = InferSchemaType<typeof messageSchema>;

export default model<Message>("Message", messageSchema);
