import { NextResponse } from "next/server";

type UserRole = "ADMIN" | "LANDLORD" | "TENANT" | "MANAGER";
type AuthUser = { id: number; name: string; email: string; role: UserRole };

const demo = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@demo.app",
    password: "password123",
    role: "ADMIN" as const,
  },
  {
    id: 2,
    name: "John Landlord",
    email: "landlord@demo.app",
    password: "password123",
    role: "LANDLORD" as const,
  },
  {
    id: 3,
    name: "Sarah Tenant",
    email: "tenant@demo.app",
    password: "password123",
    role: "TENANT" as const,
  },
  {
    id: 4,
    name: "Mike Manager",
    email: "manager@demo.app",
    password: "password123",
    role: "MANAGER" as const,
  },
];

function createToken(user: AuthUser) {
  // demo token; replace with real JWT later

  return Buffer.from(
    JSON.stringify({
      userId: user.id,
      role: user.role,
      email: user.email,
      iat: Date.now(),
    })
  ).toString("base64url");
}

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const found = demo.find((u) => u.email === email);
    if (!found || found.password !== password) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }
    const user: AuthUser = {
      id: found.id,
      name: found.name,
      email: found.email,
      role: found.role,
    };
    const token = createToken(user);
    return NextResponse.json({ token, user });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
