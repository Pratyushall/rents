"use client";

import Link from "next/link";
import { Button } from "./components/ui/button";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50/30 flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 border-b border-gray-200 fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-3xl font-extrabold">
            <span className="text-black">Rent</span>
            <span className="text-pink-600">Ease</span>
          </div>
          <div className="hidden md:flex gap-6 items-center text-sm font-medium text-gray-700">
            <Link
              href="/features"
              className="hover:text-pink-600 transition-all duration-200 hover:scale-105 transform"
            >
              Features
            </Link>
            <Link
              href="/auth/login"
              className="hover:text-pink-600 transition-all duration-200 hover:scale-105 transform"
            >
              Login
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-5 py-2 hover:scale-105 transform transition-all duration-200 shadow-md hover:shadow-lg">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <section className="relative h-[90vh] w-full overflow-hidden pt-24">
        <img
          src="/images/hero1.jpg"
          alt="Find and manage rentals with ease"
          className="absolute inset-0 object-cover w-full h-full z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-pink-900/30 to-purple-900/40 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-tight drop-shadow-2xl mb-6">
            Let legally. <br className="hidden sm:block" /> Live easily.
          </h1>
          <p className="text-white text-md sm:text-lg md:text-2xl max-w-2xl drop-shadow-2xl mb-10 font-light">
            A legally smart rental portal for tenants, landlords & managers to
            stay safe, verified, and informed.
          </p>
          <Link href="/auth/signup">
            <Button className="bg-white text-pink-600 font-bold px-8 py-4 text-lg hover:bg-pink-50 transition-all duration-200 hover:scale-105 transform shadow-2xl hover:shadow-pink-500/30">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      <div className="h-20 sm:h-28" />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              For <span className="text-pink-600">Landlords</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Partner with a smarter rental platform designed for UK landlords.
              Reach dependable tenants faster, streamline applications and
              finances, and keep every document in one secure place. With
              built-in tools for advertising, screening, lease creation, and
              messaging, you save hours, reduce risk, and gain the calm of a
              well-run portfolio.
            </p>
            <div className="flex gap-3">
              <Link href="/let">
                <Button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 hover:scale-105 transform transition-all duration-200 shadow-md hover:shadow-lg">
                  List a Property
                </Button>
              </Link>
              <Link href="/features" className="inline-block">
                <Button
                  variant="outline"
                  className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white hover:scale-105 transform transition-all duration-200 font-semibold px-6 py-3 bg-transparent"
                >
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/landlord.png"
              alt="Dashboard and tools for landlords"
              className="w-full h-[400px] object-cover rounded-2xl border-2 border-gray-200 shadow-2xl hover:scale-[1.02] transform transition-all duration-300"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-pink-50 via-purple-50/50 to-blue-50/30 border-y border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-1 md:order-none">
            <img
              src="/images/tenant.png"
              alt="Comfortable smart home living for tenants"
              className="w-full h-[400px] object-cover rounded-2xl border-2 border-gray-200 shadow-2xl hover:scale-[1.02] transform transition-all duration-300"
            />
          </div>
          <div className="order-2 md:order-none">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              For <span className="text-pink-600">Tenants</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
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
                <Button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 hover:scale-105 transform transition-all duration-200 shadow-md hover:shadow-lg">
                  Find a Home
                </Button>
              </Link>
              <Link href="/features" className="inline-block">
                <Button
                  variant="outline"
                  className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white hover:scale-105 transform transition-all duration-200 font-semibold px-6 py-3 bg-transparent"
                >
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-white via-pink-50/30 to-purple-50/30 border-b border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Key Features of RentEase
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Everything you need to manage rentals with confidence and ease
          </p>
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
                className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:shadow-2xl hover:scale-[1.03] hover:border-pink-200 transform transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-pink-600 mb-3">
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How RentEase Works
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Get started in three simple steps
          </p>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "1. Sign Up",
                description:
                  "Create an account as a tenant, landlord or manager.",
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
                className="p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 hover:shadow-xl hover:scale-[1.03] transform transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-pink-600 mb-3">
                  {title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <div className="text-3xl font-extrabold">
            <span className="text-black">Rent</span>
            <span className="text-pink-600">Ease</span>
          </div>
          <div className="flex justify-center gap-8 text-sm text-gray-600 font-medium">
            <Link
              href="/guidelines"
              className="hover:text-pink-600 hover:scale-105 transform transition-all duration-200"
            >
              Guidelines
            </Link>
            <Link
              href="/privacy"
              className="hover:text-pink-600 hover:scale-105 transform transition-all duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="hover:text-pink-600 hover:scale-105 transform transition-all duration-200"
            >
              Contact
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            © 2025 RentEase. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
