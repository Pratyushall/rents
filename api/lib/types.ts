// api/types.ts

export type UserRole = "ADMIN" | "LANDLORD" | "TENANT" | "MANAGER";

/** What we embed in JWTs */
export type JwtPayload = {
  sub: string; // user id (UUID). If Int id, use number and cast when signing.
  role?: UserRole; // include for access tokens
  jti?: string; // session id for refresh rotation
  iat?: number;
  exp?: number;
};

/** Sanitized user we return to clients */
export type PublicUser = {
  id: string; // change to number if your id is Int
  email: string;
  role: UserRole;
  firstName?: string;
  lastName?: string;
};
