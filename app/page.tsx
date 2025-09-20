"use client";

import Link from "next/link";
import { Button } from "./components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 border-b border-gray-100 fixed top-0 left-0 w-full bg-white z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-3xl font-extrabold">
            <span className="text-black">Rent</span>
            <span className="text-pink-600">Ease</span>
          </div>
          <div className="hidden md:flex gap-6 items-center text-sm font-medium text-gray-700">
            <Link href="/rent" className="hover:text-pink-600 transition">
              Rent
            </Link>
            <Link href="/let" className="hover:text-pink-600 transition">
              Let
            </Link>
            <Link href="/manage" className="hover:text-pink-600 transition">
              Manage
            </Link>
            <Link href="/features" className="hover:text-pink-600 transition">
              Features
            </Link>
            <Link href="/auth/login" className="hover:text-pink-600 transition">
              Login
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-pink-600 hover:bg-pink-500 text-white font-bold px-4 py-2">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden pt-24">
        <img
          src="/images/hero1.jpg"
          alt="Find and manage rentals with ease"
          className="absolute inset-0 object-cover w-full h-full z-0"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow mb-6">
            Let legally. <br className="hidden sm:block" /> Live easily.
          </h1>
          <p className="text-white text-md sm:text-lg md:text-2xl max-w-xl drop-shadow mb-10">
            A legally smart rental portal for tenants, landlords & managers to
            stay safe, verified, and informed.
          </p>
          <Link href="/auth/signup">
            <Button className="bg-white text-black font-bold px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg hover:bg-gray-100 transition">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      <div className="h-20 sm:h-28" />

      {/* --- REPLACED ROLE CARDS WITH TWO NEW SECTIONS --- */}

      {/* For Landlords: text left, image right */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              For <span className="text-pink-600">Landlords</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Partner with a smarter rental platform designed for UK landlords.
              Reach dependable tenants faster, streamline applications and
              finances, and keep every document in one secure place. With
              built-in tools for advertising, screening, lease creation, and
              messaging, you save hours, reduce risk, and gain the calm of a
              well-run portfolio.
            </p>
            <div className="flex gap-3">
              <Link href="/let">
                <Button className="bg-pink-600 hover:bg-pink-500 text-white font-bold px-6">
                  List a Property
                </Button>
              </Link>
              <Link href="/features" className="inline-block">
                <Button
                  variant="outline"
                  className="border-pink-200 text-pink-600 hover:bg-pink-50"
                >
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/landlords.jpg"
              alt="Dashboard and tools for landlords"
              className="w-full h-[380px] object-cover rounded-lg border border-gray-100 shadow"
            />
          </div>
        </div>
      </section>

      {/* For Tenants: image left, text right */}
      <section className="py-16 px-6 bg-pink-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative order-1 md:order-none">
            <img
              src="/images/tenants.jpg"
              alt="Comfortable smart home living for tenants"
              className="w-full h-[380px] object-cover rounded-lg border border-gray-100 shadow"
            />
          </div>
          <div className="order-2 md:order-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              For <span className="text-pink-600">Tenants</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Smart home tech makes everyday living simpler, cheaper, and more
              comfortable. From thermostats and lighting to energy monitors, cut
              waste and lower bills—while a single app lets you control heating,
              lights, and security from anywhere. IoT alerts flag leaks and
              humidity early for quicker fixes and healthier homes. Set your
              ideal light and temperature and relax into a space that truly fits
              you.
            </p>
            <div className="flex gap-3">
              <Link href="/rent">
                <Button className="bg-pink-600 hover:bg-pink-500 text-white font-bold px-6">
                  Find a Home
                </Button>
              </Link>
              <Link href="/features" className="inline-block">
                <Button
                  variant="outline"
                  className="border-pink-200 text-pink-600 hover:bg-pink-100"
                >
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-6 bg-pink-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Key Features of RentEase
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Legal Compliance",
                description:
                  "Stay compliant with UK regulations including EPC, Gas Safety, and more.",
              },
              {
                title: "Tenant Verification",
                description:
                  "Credit and affordability checks done smartly and securely.",
              },
              {
                title: "Landlord & Property Onboarding",
                description:
                  "List properties quickly, upload documents, and track applications.",
              },
              {
                title: "Smart Reminders",
                description:
                  "Never miss a certificate expiry, rent date, or renewal again.",
              },
              {
                title: "Secure Document Storage",
                description:
                  "All your important legal documents stored safely and accessed instantly.",
              },
              {
                title: "Maintenance Reporting",
                description:
                  "Easily report issues and track their resolution status in real-time.",
              },
            ].map(({ title, description }) => (
              <div
                key={title}
                className="bg-white p-6 rounded-lg shadow border hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-pink-600 mb-2">
                  {title}
                </h3>
                <p className="text-gray-700 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            How RentEase Works
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "1. Sign Up",
                description:
                  "Create an account as a tenant, landlord, manager, or admin.",
              },
              {
                title: "2. Verify & Upload",
                description:
                  "Complete verification and upload certificates or property details.",
              },
              {
                title: "3. Rent, Let, or Manage",
                description:
                  "Search listings, onboard tenants, and manage everything from one place.",
              },
            ].map(({ title, description }) => (
              <div
                key={title}
                className="p-6 rounded-lg bg-gray-50 border border-gray-200 hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold text-pink-600 mb-2">
                  {title}
                </h3>
                <p className="text-gray-700 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10 bg-white">
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
