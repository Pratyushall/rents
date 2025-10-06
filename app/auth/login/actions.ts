"use server";

import { login as apiLogin } from "../../../app/lib/api";
import type { AuthUser } from "../../../app/lib/types";

export async function doLogin(email: string, password: string) {
  const { token, user } = await apiLogin(email, password);

  const u: AuthUser = { ...user, id: String(user.id) };
  return { token, user: u };
}
