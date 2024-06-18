import prisma from "@/lib/prisma";

export const FetchUser = async () => {
  return await prisma.tbm_user.findMany({
    where: {
      is_deleted: false,
    },
  });
};

export const FetchUserById = async (id: string) => {
  return await prisma.tbm_user.findUnique({
    where: {
      id,
    },
  });
};

export const FetchUserByUsername = async (username: string) => {
  return await prisma.tbm_user.findFirst({
    where: {
      username,
      is_deleted: false,
    },
  });
};

export const FetchUserByEmail = async (email: string) => {
  return await prisma.tbm_user.findFirst({
    where: {
      email,
      is_deleted: false,
    },
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

export const StoreUser = async (data: any) => {
  return await prisma.tbm_user.create({
    data,
  });
};
