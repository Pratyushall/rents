// app/lib/http.ts
export async function api(path: string, init: RequestInit = {}) {
  const res = await fetch(`/api${path}`, {
    ...init,
    credentials: "include", // refresh cookie ok, no CORS needed
    headers: { "Content-Type": "application/json", ...(init.headers || {}) },
  });
  if (!res.ok)
    throw new Error(
      (await res.json().catch(() => ({}))).error || `HTTP ${res.status}`
    );
  return res.json();
}
