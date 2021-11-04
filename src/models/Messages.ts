import { Schema, model } from "mongoose";

const MessagesSchema = new Schema(
  {
    message: String,
    name: String,
    timestamp: String,
    received: Boolean,
  },
  { versionKey: false }
);

export default model("Messages", MessagesSchema);
