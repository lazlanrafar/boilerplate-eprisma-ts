import { VerifyAuthToken } from "@/middlewares/auth";
import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

routes.use("/user", VerifyAuthToken);

export default routes;
