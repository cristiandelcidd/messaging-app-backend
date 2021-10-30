import express, { Request, Response } from "express";
import { config as dotenvConfig } from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import Messages from "./models/Messages";

dotenvConfig();

const app = express();
const port = process.env.PORT || 9001;
const connectionUrl = "mongodb://127.0.0.1:27017" || process.env.DB_CONNECTION;

app.use(express.json());
app.use(cors());

// const dbOptions: ConnectOptions = {
//     autoIndex: true,
// };

mongoose.connect(connectionUrl, { autoIndex: true });

app.get("/", (_: Request, res: Response) => res.send("Hola Mundo"));

app.post("/messages/new", async (req: Request, res: Response) => {
  const message = req.body;
  try {
    const data = await Messages.create(message);
    return res.status(201).send(data);
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.get("/messages/sync", async (_: Request, res: Response) => {
  try {
    const data = await Messages.find();
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.listen(port, () => console.log(`Listening on localhost: ${port}`));
