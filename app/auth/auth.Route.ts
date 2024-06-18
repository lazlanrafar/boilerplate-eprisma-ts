import { Router } from "express";
import { LoginSchemaMiddleware } from "./auth.Middleware";
import { Login } from "./auth.Controller";

const authRoute = Router();

authRoute.post("/login", LoginSchemaMiddleware, Login);

export default authRoute;
