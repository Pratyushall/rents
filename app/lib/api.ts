// app/lib/api.ts
import type { AuthUser } from "./types";

// We use relative URLs so Next's rewrite / proxy handles cookies & CORS.
// (No NEXT_PUBLIC_API_URL needed in the browser.)
async function api<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`/api${path}`, {
    // IMPORTANT for refresh cookie to be sent/received
    credentials: "include",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
    ...init,
  });

  // Try to parse JSON error bodies nicely
  if (!res.ok) {
    let msg = `HTTP ${res.status}`;
    try {
      const data = await res.json();
      msg = (data?.error as string) || msg;
    } catch {
      try {
        msg = await res.text();
      } catch {}
    }
    throw new Error(msg);
  }

  return res.json() as Promise<T>;
}

// ---------- AUTH API ----------

export async function signup(body: {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  password: string;
  role: "ADMIN" | "LANDLORD" | "TENANT" | "MANAGER";
}): Promise<{ id: string; email: string; role: string }> {
  return api("/auth/signup", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

export async function login(
  email: string,
  password: string
): Promise<{ token: string; user: AuthUser }> {
  // Backend returns { accessToken, user } (recommended) or sometimes { token, ... }.
  const data = await api<any>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  const token: string = data.accessToken ?? data.token;
  const user: AuthUser = data.user ?? {
    // in case API returned user fields at top level
    id: data.id,
    name:
      data.firstName && data.lastName
        ? `${data.firstName} ${data.lastName}`
        : undefined,
    email: data.email,
    role: data.role,
  };

  if (!token) throw new Error("No token in login response");
  return { token, user };
}

export async function me(accessToken?: string): Promise<AuthUser> {
  return api<AuthUser>("/auth/me", {
    headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
  });
}

export async function refresh(): Promise<{ token: string }> {
  const data = await api<any>("/auth/refresh", { method: "POST" });
  const token: string = data.accessToken ?? data.token;
  if (!token) throw new Error("No token in refresh response");
  return { token };
}

export async function logout(): Promise<{ ok: boolean }> {
  return api("/auth/logout", { method: "POST" });
}
