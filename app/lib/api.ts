import type { AuthUser } from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
// ^ set this to your Express server port

async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<T>;
}

export async function login(
  email: string,
  password: string
): Promise<{ token: string; user: AuthUser }> {
  return api("/users/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}
