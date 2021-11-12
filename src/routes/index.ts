import express, { Request, Response } from "express";
import cors from "cors";

import Messages from "../models/Messages";

const app = express();

app.use(express.json());
app.use(cors());

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

export default app;
