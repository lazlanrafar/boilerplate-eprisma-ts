import prisma from "@/lib/prisma";

export const FetchUserById = async (id: string) => {
  return await prisma.tbm_user.findUnique({
    where: { id },
  });
};
