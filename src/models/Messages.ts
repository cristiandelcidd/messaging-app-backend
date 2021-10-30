import { Schema, model } from "mongoose";

const messagesSchema = new Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

export default model("Messages", messagesSchema);
