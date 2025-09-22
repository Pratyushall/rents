export type UserRole = "ADMIN" | "LANDLORD" | "TENANT" | "MANAGER";

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}
