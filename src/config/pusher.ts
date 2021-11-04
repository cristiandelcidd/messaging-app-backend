import Pusher from "pusher";

import { config as dotenvConfig } from "dotenv";

dotenvConfig();

const pusherOptions: Pusher.Options = {
  appId: process.env.APPID!,
  key: process.env.KEY!,
  secret: process.env.SECRET!,
  cluster: process.env.CLUSTER!,
  useTLS: true,
};

export default pusherOptions;
