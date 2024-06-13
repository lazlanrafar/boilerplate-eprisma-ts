import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import logger from "morgan";
import cookieParser from "cookie-parser";
import path from "path";

dotenv.config();

// import Routes from "./routes";

const app: Express = express();
const port = process.env.API_PORT;

app
  .use(cors())
  .use(logger("dev"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(express.static(path.join(__dirname, "public")));

// Routes(app);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
