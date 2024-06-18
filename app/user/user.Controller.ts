import { Request, Response } from "express";
import { InternalServerError, Ok } from "@/utils/api-response";
import { FetchUser, FetchUserById } from "./user.Repository";

export const GetUser = async (req: Request, res: Response) => {
  try {
    const users = await FetchUser();

    return await Ok({ res, data: users });
  } catch (error) {
    return InternalServerError({ res, data: error });
  }
};

export const GetUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await FetchUserById(id);

    return await Ok({ res, data: user });
  } catch (error) {
    return InternalServerError({ res, data: error });
  }
};
