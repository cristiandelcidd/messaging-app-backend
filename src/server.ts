import { config as dotenvConfig } from "dotenv";

import app from "./routes";
import "./db";

dotenvConfig();

const port = process.env.PORT;

app.listen(port, () => {});
