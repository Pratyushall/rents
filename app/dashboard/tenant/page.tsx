"use client";

import Link from "next/link";
import { Button } from "../../components/ui/button";

export default function TenantHomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-4 border-b border-gray-100 fixed top-0 left-0 w-full bg-white z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-3xl font-extrabold">
            <span className="text-black">Rent</span>
            <span className="text-pink-600">Ease</span>
          </div>
          <nav className="flex gap-6 items-center text-sm font-medium text-gray-700">
            <Link href="/rent" className="hover:text-pink-600 transition">
              Rent
            </Link>
            <Link href="/let" className="hover:text-pink-600 transition">
              Let
            </Link>
            <Link href="/manage" className="hover:text-pink-600 transition">
              Manage
            </Link>
            <Link
              href="/dashboard/tenant"
              className="hover:text-pink-600 transition"
            >
              Dashboard
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-28 px-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Welcome back, Tenant!</h1>

        {/* Certificates Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-2">Your Certificates</h2>
          <p className="text-gray-600 mb-4">
            Ensure you have uploaded all required documents.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex justify-between items-center">
            <div>
              <p className="font-bold text-yellow-800">
                Gas Safety Certificate
              </p>
              <p className="text-sm text-yellow-700">Not uploaded</p>
            </div>
            <Button variant="outline">Upload</Button>
          </div>
        </section>

        {/* Application Status */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-2">
            Rental Application Status
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="font-bold text-blue-800">Current Application</p>
            <p className="text-sm text-blue-700">
              Status: <span className="font-medium">Pending Verification</span>
            </p>
          </div>
        </section>

        {/* Property Suggestions */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-2">Explore Listings</h2>
          <p className="text-gray-600 mb-4">
            Powered by trusted UK rental platforms.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((id) => (
              <div key={id} className="border rounded-lg p-4 shadow-sm">
                <h3 className="font-bold text-lg">Property #{id}</h3>
                <p className="text-sm text-gray-600">
                  2BHK • London • £1200/month
                </p>
                <Button variant="outline" className="mt-2">
                  Apply
                </Button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10 bg-white mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <div className="text-2xl font-extrabold">
            <span className="text-black">Rent</span>
            <span className="text-pink-600">Ease</span>
          </div>
          <div className="flex justify-center gap-6 text-sm text-gray-600">
            <Link href="/guidelines" className="hover:text-pink-600">
              Guidelines
            </Link>
            <Link href="/privacy" className="hover:text-pink-600">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-pink-600">
              Contact
            </Link>
          </div>
          <p className="text-xs text-gray-400">
            © 2025 RentEase. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
