// app/lib/types.ts

/** UUID from your Prisma models */
export type UUID = string;

/** Mirror of Prisma enum UserRole */
export type UserRole = "ADMIN" | "MANAGER" | "LANDLORD" | "TENANT";

/** Minimal, safe shape the frontend should use for a signed-in user */
export type AuthUser = {
  id: UUID;
  email: string;
  role: UserRole;
  firstName?: string;
  lastName?: string;
  /** Optional convenience for UI (firstName + lastName) */
  name?: string;
};

/** ---------- Auth request/response shapes ---------- */

export type SignupBody = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  password: string;
  role: UserRole;
};

export type SignupResponse = {
  id: UUID;
  email: string;
  role: UserRole;
  createdAt?: string;
  updatedAt?: string;
};

export type LoginResponse =
  | { accessToken: string; user: AuthUser }
  | { token: string; user: AuthUser };

export type RefreshResponse = { accessToken: string } | { token: string };

export type LogoutResponse = { ok: boolean };

/** Helper to normalize token key between {accessToken} and {token} */
export function pickToken(resp: LoginResponse | RefreshResponse): string {
  return (resp as any).accessToken ?? (resp as any).token;
}
