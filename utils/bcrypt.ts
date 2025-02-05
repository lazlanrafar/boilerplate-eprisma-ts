import bcrypt from "bcryptjs";

export class Bcrypt {
  async hashPassword({ password }: { password: string }) {
    return await bcrypt.hash(password, 10);
  }

  async comparePassword({
    password,
    hash,
  }: {
    password: string;
    hash: string;
  }) {
    return await bcrypt.compare(password, hash);
  }
}
