import { Router } from "express";
import {
  LoginSchemaMiddleware,
  RegisterSchemaMiddleware,
} from "./auth.Middleware";
import { Login, Register } from "./auth.Controller";

const authRoute = Router();

authRoute.post("/login", LoginSchemaMiddleware, Login);
authRoute.post("/register", RegisterSchemaMiddleware, Register);

export default authRoute;
