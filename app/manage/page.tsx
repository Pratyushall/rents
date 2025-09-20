"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isUserLoggedIn } from "../lib/auth";

export default function RentPage() {
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoggedIn()) {
      router.push("/auth/signup");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg">Loading Rent Listings...</p>
    </div>
  );
}
