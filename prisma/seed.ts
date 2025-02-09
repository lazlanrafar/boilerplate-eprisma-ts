import { PrismaClient } from "@prisma/client";
import { UserSeeder } from "./seeders/user.Seed";

const prisma = new PrismaClient();

async function main() {
  await UserSeeder(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
