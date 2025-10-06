"use client";
import { SessionProvider } from "next-auth/react";
export default function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

// -----------------------------
// /app/login/page.tsx (simple login button)
// -----------------------------
import { auth, signIn } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();
  if (session) redirect("/post-auth");
  return (
    <div className="mx-auto max-w-md p-8">
      <h1 className="text-2xl font-semibold mb-6">Sign in</h1>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/post-auth" });
        }}
      >
        <button className="px-4 py-2 rounded border">
          Continue with Google
        </button>
      </form>
    </div>
  );
}
