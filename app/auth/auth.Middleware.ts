import { BadRequest, InternalServerError } from "@/utils/api-response";
import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { LoginSchema } from "./auth.Schema";
import { FetchUserByUsernameOREmail } from "../user/user.Repository";
import { VerifyPassword } from "@/utils/hash-password";

export const LoginSchemaMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validate = LoginSchema.parse(req.body);

    const user = await FetchUserByUsernameOREmail(validate.uid);
    if (!user) return BadRequest({ res, message: "User not found" });

    const verifyPassword = await VerifyPassword(
      validate.password,
      user.password
    );

    switch (true) {
      case verifyPassword == false:
        return BadRequest({ res, message: "Password is incorrect" });
      case user.is_deleted:
        return BadRequest({ res, message: "User is deleted" });
      case user.is_active == false:
        return BadRequest({ res, message: "User is not active" });
      default:
        break;
    }

    req.body.user = user;
    next();
  } catch (error) {
    if (error instanceof ZodError)
      return BadRequest({ res, data: error, message: error.errors[0].message });

    return InternalServerError({ res });
  }
};
