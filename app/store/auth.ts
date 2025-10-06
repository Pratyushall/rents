// app/store/auth.ts
import { create } from "zustand";
type User = {
  id: string;
  email: string;
  role: string;
  firstName?: string;
  lastName?: string;
};
type State = { user: User | null; accessToken: string | null };
export const useAuth = create<State>(() => ({ user: null, accessToken: null }));
