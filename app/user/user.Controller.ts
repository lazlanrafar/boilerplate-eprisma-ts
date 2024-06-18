import { Request, Response } from "express";
import { InternalServerError, Ok } from "@/utils/api-response";
import { FetchUser } from "./user.Repository";

export const GetUser = async (req: Request, res: Response) => {
  try {
    const users = await FetchUser();

    return await Ok({ res, data: users });
  } catch (error) {
    return InternalServerError({ res, data: error });
  }
};
