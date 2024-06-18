import { Request, Response } from "express";
import { Router } from "express";
import { VerifyAuthToken } from "@/middlewares/auth";
import { Ok } from "@/utils/api-response";

import authRoute from "@/app/auth/auth.Route";

const routes = Router();

// AUTH
routes.use("/", authRoute);

// OTHERS
routes.use("/user", VerifyAuthToken);
routes.get("/whoami", VerifyAuthToken, (req: Request, res: Response) => {
  return Ok({ res, data: req.cookies.user });
});

export default routes;
