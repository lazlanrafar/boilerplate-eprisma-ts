import { VerifyAuthToken } from "@/middlewares/auth";
import { Router } from "express";

import authRoute from "@/app/auth/auth.Route";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

// AUTH
routes.use("/", authRoute);

// OTHERS
routes.use("/user", VerifyAuthToken);

export default routes;
