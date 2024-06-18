import { z } from "zod";

export const LoginSchema = z.object({
  uid: z.string().min(1, "uid is required"),
  password: z.string().min(1, "password is required"),
});
