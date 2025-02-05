import { Prisma, PrismaClient, tbm_user } from "@prisma/client";
import { Bcrypt } from "../../utils/bcrypt";

export const UserSeeder = async (prisma: PrismaClient) => {
  const bcrypt = new Bcrypt();
  const email = "john@gmail.com";
  const passwordHash = await bcrypt.hashPassword({ password: "password" });

  const existingAuth = await prisma.tbm_auth.findUnique({ where: { email } });

  if (existingAuth) {
    return console.log("[🌱] User already exists", existingAuth);
  }

  // Create auth first
  const newAuth = await prisma.tbm_auth.create({
    data: {
      email,
      password: passwordHash,
    },
  });

  // Create user linked to auth
  const newUser = await prisma.tbm_user.create({
    data: {
      email: newAuth.email,
      first_name: "John",
      last_name: "Doe",
    },
  });

  console.log("[🌱] User seeded successfully", newUser);
};
