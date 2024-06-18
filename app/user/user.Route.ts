import { Router } from "express";
import { GetUser } from "./user.Controller";

const UserRoute = Router();

UserRoute.get("/", GetUser);

export default UserRoute;
