"use client";

import type React from "react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../components/ui/select";

import { login as apiLogin } from "../../lib/api";
import { useAuthStore } from "../../lib/store";
import type { UserRole } from "../../lib/types";

type UiRole = "tenant" | "landlord" | "manager" | "admin";

// Accepts enum-like ("TENANT") or lowercase ("tenant")
function normalizeRole(role: string | undefined | null): UiRole {
  const r = (role || "").toString().toLowerCase();
  if (r === "tenant") return "tenant";
  if (r === "landlord") return "landlord";
  if (r === "manager") return "manager";
  if (r === "admin") return "admin";
  // default
  return "tenant";
}

function routeForRole(role: string): string {
  switch (normalizeRole(role)) {
    case "admin":
      return "/dashboard/admin";
    case "landlord":
      return "/dashboard/landlord";
    case "manager":
      return "/dashboard/manager";
    case "tenant":
    default:
      return "/dashboard/tenant";
  }
}

export default function LoginClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login: setAuth } = useAuthStore();

  const initialRole = useMemo(
    () => normalizeRole(searchParams.get("role")),
    [searchParams]
  );
  const nextParam = useMemo(
    () => searchParams.get("next") || "",
    [searchParams]
  );

  const [role, setRole] = useState<UiRole>(initialRole);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { token, user } = await apiLogin(formData.email, formData.password);

      // Persist auth (Zustand)
      setAuth(token, user);

      // Optional: also mirror token locally if your fetchers rely on it
      try {
        localStorage.setItem("token", token);
      } catch {}

      // Prefer an explicit ?next=... target if provided and safe
      const safeNext =
        nextParam && nextParam.startsWith("/") && !nextParam.startsWith("//")
          ? nextParam
          : null;

      const fallback = routeForRole((user as any)?.role);

      router.replace(safeNext || fallback);
    } catch (err: any) {
      // Show API-provided message if available
      const msg =
        (err?.message && typeof err.message === "string" && err.message) ||
        "Invalid email or password";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-4xl font-extrabold">
            <span className="text-primary">Rent</span>
            <span className="text-secondary">Ease</span>
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
            <CardDescription>
              Sign in as <span className="capitalize font-medium">{role}</span>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Role selector is UI-only; backend decides final role */}
              <div>
                <Label htmlFor="role" className="font-semibold">
                  Role
                </Label>
                <Select
                  value={role}
                  onValueChange={(v) => setRole(v as UiRole)}
                >
                  <SelectTrigger id="role" className="w-full">
                    <SelectValue placeholder="Choose role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tenant">Tenant</SelectItem>
                    <SelectItem value="landlord">Landlord</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="email" className="font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((s) => ({ ...s, email: e.target.value }))
                  }
                  autoComplete="email"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="font-semibold">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData((s) => ({ ...s, password: e.target.value }))
                  }
                  autoComplete="current-password"
                  required
                />
              </div>

              {error && (
                <p className="text-sm text-red-600" role="alert">
                  {error}
                </p>
              )}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don’t have an account?{" "}
                <Link
                  href="/auth/signup"
                  className="text-primary font-semibold hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
