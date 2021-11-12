import { connection, connect } from "mongoose";
import Pusher from "pusher";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

import pusherOptions from "../config/pusher";

const pusher = new Pusher(pusherOptions);

const db = connection;

db.once("open", () => {
  const msgCollection = db.collection("messages");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument!;

      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("Error trigerring Pusher");
    }
  });
});

const connectionUrl =
  process.env.DB_CONNECTION || "mongodb://127.0.0.1:27017/messaging-app";

connect(connectionUrl, { autoIndex: true });
