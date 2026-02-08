import { left, right } from "@/shared/lib/either";
import { passwordService } from "./password";
import { userRepository } from "../repositories/user";

export async function verifyUserPassword({
  login,
  password,
}: {
  login: string;
  password: string;
}) {
  const user = await userRepository.getUser({ login });

  if (!user) {
    return left("wrong-login-or-password" as const);
  }

  const isCompare = await passwordService.comparePasswords({
    hash: user.passwordHash,
    salt: user.salt,
    password,
  });

  if (!isCompare) {
    return left("wrong-login-or-password" as const);
  }

  return right(user);
}