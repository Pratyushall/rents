"use client";

import Link from "next/link";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Bell,
  FileText,
  Home,
  MessageSquare,
  UploadCloud,
  Wrench,
  CreditCard,
  CalendarCheck,
  ClipboardList,
} from "lucide-react";

export default function TenantHomePage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] px-6 py-10">
      {/* Welcome */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Welcome back, Pratyusha 👋
        </h1>
        <p className="text-gray-600 text-lg">
          Here's a snapshot of your rental journey today.
        </p>
      </div>

      {/* Dashboard Summary */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="hover:shadow-md transition cursor-pointer">
          <CardHeader>
            <CardTitle className="text-pink-600">Rent Status</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Due: <strong>Aug 1, 2025</strong>
            </p>
            <p className="text-gray-700">
              Amount: <strong>₹12,000</strong>
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition cursor-pointer">
          <CardHeader>
            <CardTitle className="text-pink-600">Lease Period</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">Start: July 1, 2024</p>
            <p className="text-gray-700">End: June 30, 2025</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition cursor-pointer">
          <CardHeader>
            <CardTitle className="text-pink-600">Certificates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">2 Uploaded</p>
            <p className="text-gray-700">1 Pending</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            { label: "Pay Rent", icon: CreditCard, href: "/tenant/pay" },
            {
              label: "Upload Docs",
              icon: UploadCloud,
              href: "/tenant/certificates",
            },
            { label: "My Lease", icon: FileText, href: "/tenant/lease" },
            { label: "Message", icon: MessageSquare, href: "/tenant/messages" },
            {
              label: "Report Issue",
              icon: Wrench,
              href: "/tenant/maintenance",
            },
            {
              label: "Notifications",
              icon: Bell,
              href: "/tenant/notifications",
            },
          ].map(({ label, icon: Icon, href }) => (
            <Link
              href={href}
              key={label}
              className="bg-white border rounded-lg p-4 flex flex-col items-center hover:shadow transition text-center"
            >
              <Icon className="w-6 h-6 text-pink-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">{label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Recent Activity
        </h2>
        <div className="bg-white border rounded-lg p-6 space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-700">Paid Rent</span>
            <span className="text-green-600 font-semibold">
              ₹12,000 • July 1
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Uploaded EPC</span>
            <span className="text-blue-600 font-semibold">✓</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Maintenance Request</span>
            <span className="text-orange-500 font-semibold">In Progress</span>
          </div>
        </div>
      </div>

      {/* Reminders Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Upcoming Reminders
        </h2>
        <div className="bg-white border rounded-lg p-6 space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <CalendarCheck className="w-5 h-5 text-pink-600" />
              <span className="text-gray-700">Rent Due: Aug 1</span>
            </div>
            <Link
              href="/tenant/pay"
              className="text-pink-600 hover:underline text-sm"
            >
              Pay Now
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <ClipboardList className="w-5 h-5 text-pink-600" />
              <span className="text-gray-700">EPC Expiry: Sept 10</span>
            </div>
            <Link
              href="/tenant/certificates"
              className="text-pink-600 hover:underline text-sm"
            >
              Upload
            </Link>
          </div>
        </div>
      </div>

      {/* Announcements Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Announcements</h2>
        <div className="bg-white border rounded-lg p-6 space-y-3">
          <p className="text-gray-700">
            🔧 Scheduled maintenance on Aug 5 between 10 AM - 2 PM
          </p>
          <p className="text-gray-700">
            📢 New fire safety regulation update - check your notifications
          </p>
        </div>
      </div>

      {/* Lease Details */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">My Property</h2>
        <div className="bg-white border rounded-lg p-6">
          <p className="text-lg font-semibold mb-2">Sunset Heights, Flat 203</p>
          <p className="text-gray-600 mb-1">2 BHK • 1200 sqft</p>
          <p className="text-gray-600 mb-1">123 Main Street, Bangalore</p>
          <Link href="/tenant/lease">
            <Button className="mt-4 bg-pink-600 hover:bg-pink-500 text-white font-bold">
              View Lease Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
