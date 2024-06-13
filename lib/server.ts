import express, { Application, Response, Request } from "express";
import cors from "cors";
import logger from "morgan";
import cookieParser from "cookie-parser";
import routes from "@/routes";
import prisma from "@/lib/prisma";
import path from "path";
import { InternalServerError } from "@/utils/api-response";

class App {
  public express: Application;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express
      .use(cors())
      .use(logger("dev"))
      .use(express.json())
      .use(express.urlencoded({ extended: false }))
      .use(cookieParser())
      .use(express.static("public"));
  }

  private routes(): void {
    const apiVersion = process.env.API_VERSION || "v1";
    const preRoute = `/${apiVersion}`;

    this.express.use(`${preRoute}/`, routes);
    this.express.get("/", (req: Request, res: Response) => {
      try {
        res.sendFile(path.join(__dirname, "@/public/home.html"));
      } catch (err) {
        return InternalServerError({ res, data: err });
      }
    });
  }

  public async connectPrisma(): Promise<void> {
    await prisma.$connect();
  }

  public async disconnectPrisma(): Promise<void> {
    await prisma.$disconnect();
  }
}

export default App;
