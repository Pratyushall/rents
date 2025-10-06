// app/lib/authFetch.ts
import { useAuth } from "../../app/store/auth";

export async function authFetch(path: string, init: RequestInit = {}) {
  let { accessToken } = useAuth.getState();
  let res = await fetch(`/api${path}`, {
    ...init,
    credentials: "include",
    headers: {
      ...(init.headers || {}),
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
  });

  if (res.status === 401) {
    // try to refresh
    const r = await fetch("/api/auth/refresh", {
      method: "POST",
      credentials: "include",
    });
    if (r.ok) {
      const { accessToken: fresh } = await r.json();
      useAuth.setState({ accessToken: fresh, user: useAuth.getState().user });
      res = await fetch(`/api${path}`, {
        ...init,
        credentials: "include",
        headers: { ...(init.headers || {}), Authorization: `Bearer ${fresh}` },
      });
    }
  }
  if (!res.ok)
    throw new Error(
      (await res.json().catch(() => ({}))).error || `HTTP ${res.status}`
    );
  return res.json();
}
