"use client";

import type React from "react";
import { useState, useEffect } from "react";
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
import { Suspense } from "react";
import LoginClient from "@/app/auth/login-temp/login-client";

type Role = "tenant" | "landlord" | "manager" | "admin";

export const dynamic = "force-dynamic";

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="p-6">Loading…</div>}>
      <LoginClient />
    </Suspense>
  );
}

const router = useRouter();
const searchParams = useSearchParams();

// default from ?role=, else tenant
const roleFromQuery =
  (searchParams.get("role")?.toLowerCase() as Role) || "tenant";
const [role, setRole] = useState<Role>("tenant");

useEffect(() => {
  setRole(roleFromQuery);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

const [formData, setFormData] = useState({ email: "", password: "" });

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const mockUser = {
    email: formData.email,
    role, // <- use the selectable role
  };

  // Store user data (replace with real auth in production)
  localStorage.setItem("user", JSON.stringify(mockUser));

  // Redirect to role-specific homepage
  switch (role) {
    case "admin":
      router.push("/admin/home");
      break;
    case "manager":
      router.push("/manager/home");
      break;
    case "landlord":
      router.push("/landlord/home");
      break;
    case "tenant":
    default:
      router.push("/tenant/home");
      break;
  }
};

<div className="min-h-screen bg-white flex items-center justify-center px-4">
  <div className="w-full max-w-md">
    {/* Logo */}
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
          {/* Role selector */}
          <div>
            <Label htmlFor="role" className="font-semibold">
              Role
            </Label>
            <Select value={role} onValueChange={(v: Role) => setRole(v)}>
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
                setFormData({ ...formData, email: e.target.value })
              }
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
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-600"
              >
                Remember me
              </label>
            </div>
            <Link
              href="/auth/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 font-bold"
          >
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              href={`/auth/signup?role=${role}`}
              className="text-primary font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  </div>
</div>;
