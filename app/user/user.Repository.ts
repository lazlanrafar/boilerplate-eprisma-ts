import prisma from "@/lib/prisma";

export const FetchUserById = async (id: string) => {
  return await prisma.tbm_user.findUnique({
    where: { id },
  });
};

export const FetchUserByUsernameOREmail = async (uid: string) => {
  return await prisma.tbm_user.findFirst({
    where: {
      OR: [{ email: uid }, { username: uid }],
      is_deleted: false,
    },
  });
};
