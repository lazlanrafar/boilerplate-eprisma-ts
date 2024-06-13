import { Application, Request, Response } from "express";

export default function Routes(app: Application) {
  const apiVersion = process.env.API_VERSION || "v1";
  const preRoute = `/${apiVersion}`;

  app.use(`${preRoute}/`, (req: Request, res: Response) => {
    res.send("Hello World");
  });
}
