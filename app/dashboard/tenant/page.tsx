"use client";

import Link from "next/link";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Progress } from "../../components/ui/progress";
import {
  Bell,
  MessageSquare,
  Home,
  Thermometer,
  Zap,
  Droplets,
  Shield,
  Calendar,
  CreditCard,
  MapPin,
  Cloud,
  Train,
  Users,
  Settings,
  ChevronRight,
  AlertTriangle,
  CheckCircle,
  Clock,
  Wifi,
  Lock,
  Activity,
} from "lucide-react";

export default function TenantHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50/20">
      <header className="px-6 py-4 border-b border-gray-200 fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-extrabold">
            <span className="text-black">Rent</span>
            <span className="text-pink-600">Ease</span>
          </div>
          <nav className="flex gap-6 items-center text-sm font-medium text-gray-700">
            <Link
              href="/rent"
              className="hover:text-pink-600 transition-all duration-200 hover:scale-105 transform"
            >
              Rent
            </Link>
            <Link
              href="/let"
              className="hover:text-pink-600 transition-all duration-200 hover:scale-105 transform"
            >
              Let
            </Link>
            <Link
              href="/manage"
              className="hover:text-pink-600 transition-all duration-200 hover:scale-105 transform"
            >
              Manage
            </Link>
            <Link
              href="/dashboard/tenant"
              className="text-pink-600 font-semibold transition-all duration-200"
            >
              Dashboard
            </Link>
            <div className="flex items-center gap-3 ml-4">
              <Button
                variant="ghost"
                size="sm"
                className="relative hover:bg-pink-50 transition-all duration-200"
              >
                <Bell className="h-4 w-4" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-red-500 text-white shadow-md">
                  3
                </Badge>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="relative hover:bg-pink-50 transition-all duration-200"
              >
                <MessageSquare className="h-4 w-4" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-pink-600 text-white shadow-md">
                  2
                </Badge>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-20 px-6 max-w-7xl mx-auto">
        <div className="mb-8 mt-6">
          <h1 className="text-4xl font-extrabold mb-2 text-balance text-gray-900">
            Welcome back, Tenant!
          </h1>
          <p className="text-gray-600 text-lg">
            Your London home dashboard • Flat 4B, Camden Gardens
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-white to-pink-50/50 border-pink-200 shadow-lg hover:shadow-xl hover:scale-[1.02] transform transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Rent Due</p>
                  <p className="text-3xl font-extrabold text-pink-600">
                    £1,200
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Due in 5 days</p>
                </div>
                <CreditCard className="h-10 w-10 text-pink-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white to-green-50/50 border-green-200 shadow-lg hover:shadow-xl hover:scale-[1.02] transform transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">
                    Energy Usage
                  </p>
                  <p className="text-3xl font-extrabold text-green-600">
                    £89.50
                  </p>
                  <p className="text-xs text-green-600 mt-1 font-semibold">
                    ↓ 12% this month
                  </p>
                </div>
                <Zap className="h-10 w-10 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white to-blue-50/50 border-blue-200 shadow-lg hover:shadow-xl hover:scale-[1.02] transform transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Messages</p>
                  <p className="text-3xl font-extrabold text-blue-600">2</p>
                  <p className="text-xs text-gray-500 mt-1">From landlord</p>
                </div>
                <MessageSquare className="h-10 w-10 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white to-purple-50/50 border-purple-200 shadow-lg hover:shadow-xl hover:scale-[1.02] transform transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">
                    Maintenance
                  </p>
                  <p className="text-3xl font-extrabold text-purple-600">1</p>
                  <p className="text-xs text-gray-500 mt-1">Active request</p>
                </div>
                <Settings className="h-10 w-10 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-bold text-gray-900">
                  <Home className="h-6 w-6 text-pink-600" />
                  Smart Home Controls
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Manage your connected devices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-5 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 hover:shadow-lg hover:scale-[1.05] transform transition-all duration-300">
                    <Thermometer className="h-8 w-8 text-red-600 mb-2" />
                    <span className="text-sm font-semibold text-gray-700">
                      Heating
                    </span>
                    <span className="text-2xl font-extrabold text-red-600">
                      21°C
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2 hover:bg-red-100 text-red-600 font-semibold"
                    >
                      Adjust
                    </Button>
                  </div>

                  <div className="flex flex-col items-center p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 hover:shadow-lg hover:scale-[1.05] transform transition-all duration-300">
                    <Zap className="h-8 w-8 text-green-600 mb-2" />
                    <span className="text-sm font-semibold text-gray-700">
                      Power
                    </span>
                    <span className="text-2xl font-extrabold text-green-600">
                      2.4kW
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2 hover:bg-green-100 text-green-600 font-semibold"
                    >
                      Monitor
                    </Button>
                  </div>

                  <div className="flex flex-col items-center p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 hover:shadow-lg hover:scale-[1.05] transform transition-all duration-300">
                    <Droplets className="h-8 w-8 text-blue-600 mb-2" />
                    <span className="text-sm font-semibold text-gray-700">
                      Water
                    </span>
                    <span className="text-2xl font-extrabold text-blue-600">
                      Normal
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2 hover:bg-blue-100 text-blue-600 font-semibold"
                    >
                      Check
                    </Button>
                  </div>

                  <div className="flex flex-col items-center p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 hover:shadow-lg hover:scale-[1.05] transform transition-all duration-300">
                    <Lock className="h-8 w-8 text-purple-600 mb-2" />
                    <span className="text-sm font-semibold text-gray-700">
                      Security
                    </span>
                    <span className="text-2xl font-extrabold text-purple-600">
                      Armed
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2 hover:bg-purple-100 text-purple-600 font-semibold"
                    >
                      Control
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-bold text-gray-900">
                  <MapPin className="h-6 w-6 text-pink-600" />
                  London Today
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Weather and transport updates for Camden
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 hover:shadow-lg hover:scale-[1.02] transform transition-all duration-300">
                    <Cloud className="h-10 w-10 text-blue-600" />
                    <div>
                      <p className="font-bold text-gray-900">Partly Cloudy</p>
                      <p className="text-3xl font-extrabold text-blue-600">
                        16°C
                      </p>
                      <p className="text-sm text-gray-600">Feels like 18°C</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 hover:shadow-lg hover:scale-[1.02] transform transition-all duration-300">
                    <Train className="h-10 w-10 text-purple-600" />
                    <div>
                      <p className="font-bold text-gray-900">Northern Line</p>
                      <p className="text-sm text-green-600 font-semibold">
                        Good Service
                      </p>
                      <p className="text-sm text-gray-600"></p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-bold text-gray-900">
                  <MessageSquare className="h-6 w-6 text-pink-600" />
                  Recent Messages
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Communications with your landlord and property manager
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 hover:shadow-md transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white text-sm font-bold shadow-md">
                      JD
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-bold text-gray-900">
                          John Davies (Landlord)
                        </p>
                        <span className="text-xs text-gray-500">2h ago</span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Hi Alex, the heating engineer will visit tomorrow
                        between 10-12pm for the annual service.
                      </p>
                    </div>
                    <Badge className="bg-pink-600 text-white shadow-sm">
                      New
                    </Badge>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 hover:shadow-md transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold shadow-md">
                      PM
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-bold text-gray-900">
                          Property Manager
                        </p>
                        <span className="text-xs text-gray-500">1d ago</span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Your maintenance request for the kitchen tap has been
                        scheduled for Friday.
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-semibold hover:scale-[1.02] transform transition-all duration-200 bg-transparent"
                >
                  View All Messages
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900">
                  <Bell className="h-5 w-5 text-pink-600" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border-2 border-red-200 hover:shadow-md transition-all duration-300">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        Rent Due Soon
                      </p>
                      <p className="text-xs text-gray-600">
                        Payment due in 5 days
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border-2 border-green-200 hover:shadow-md transition-all duration-300">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        Energy Report Ready
                      </p>
                      <p className="text-xs text-gray-600">
                        Monthly usage summary
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 border-2 border-blue-200 hover:shadow-md transition-all duration-300">
                    <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        Maintenance Scheduled
                      </p>
                      <p className="text-xs text-gray-600">Tomorrow 10-12pm</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900">
                  <Shield className="h-5 w-5 text-pink-600" />
                  Property Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-700">
                        Safety Certificates
                      </span>
                      <span className="text-sm text-green-600 font-bold">
                        85%
                      </span>
                    </div>
                    <Progress value={85} className="h-3" />
                    <p className="text-xs text-gray-600 mt-1">
                      Gas safety pending
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-700">
                        Maintenance Score
                      </span>
                      <span className="text-sm text-green-600 font-bold">
                        92%
                      </span>
                    </div>
                    <Progress value={92} className="h-3" />
                    <p className="text-xs text-gray-600 mt-1">
                      Excellent condition
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-700">
                        Smart Home Setup
                      </span>
                      <span className="text-sm text-blue-600 font-bold">
                        78%
                      </span>
                    </div>
                    <Progress value={78} className="h-3" />
                    <p className="text-xs text-gray-600 mt-1">
                      4 of 5 devices connected
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900">
                  <Users className="h-5 w-5 text-pink-600" />
                  Building Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 hover:shadow-md transition-all duration-300">
                    <p className="text-sm font-bold text-gray-900">
                      Building Meeting
                    </p>
                    <p className="text-xs text-gray-600">
                      Next Thursday 7pm - Community Room
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 hover:shadow-md transition-all duration-300">
                    <p className="text-sm font-bold text-gray-900">
                      Parcel Collection
                    </p>
                    <p className="text-xs text-gray-600">
                      2 packages waiting at reception
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 hover:shadow-md transition-all duration-300">
                    <p className="text-sm font-bold text-gray-900">
                      Gym Booking
                    </p>
                    <p className="text-xs text-gray-600">
                      Available slots: 6pm-8pm today
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Quick Actions
            </CardTitle>
            <CardDescription className="text-gray-600">
              Common tasks and services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Button
                variant="outline"
                className="h-24 flex-col gap-2 border-2 border-pink-200 hover:bg-pink-600 hover:text-white hover:border-pink-600 hover:scale-[1.05] transform transition-all duration-200 font-semibold shadow-md bg-transparent"
              >
                <CreditCard className="h-7 w-7" />
                <span className="text-xs">Pay Rent</span>
              </Button>

              <Button
                variant="outline"
                className="h-24 flex-col gap-2 border-2 border-purple-200 hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:scale-[1.05] transform transition-all duration-200 font-semibold shadow-md bg-transparent"
              >
                <Settings className="h-7 w-7" />
                <span className="text-xs">Maintenance</span>
              </Button>

              <Button
                variant="outline"
                className="h-24 flex-col gap-2 border-2 border-blue-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-[1.05] transform transition-all duration-200 font-semibold shadow-md bg-transparent"
              >
                <Calendar className="h-7 w-7" />
                <span className="text-xs">Book Viewing</span>
              </Button>

              <Button
                variant="outline"
                className="h-24 flex-col gap-2 border-2 border-green-200 hover:bg-green-600 hover:text-white hover:border-green-600 hover:scale-[1.05] transform transition-all duration-200 font-semibold shadow-md bg-transparent"
              >
                <Wifi className="h-7 w-7" />
                <span className="text-xs">WiFi Setup</span>
              </Button>

              <Button
                variant="outline"
                className="h-24 flex-col gap-2 border-2 border-orange-200 hover:bg-orange-600 hover:text-white hover:border-orange-600 hover:scale-[1.05] transform transition-all duration-200 font-semibold shadow-md bg-transparent"
              >
                <Activity className="h-7 w-7" />
                <span className="text-xs">Energy Report</span>
              </Button>

              <Button
                variant="outline"
                className="h-24 flex-col gap-2 border-2 border-cyan-200 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 hover:scale-[1.05] transform transition-all duration-200 font-semibold shadow-md bg-transparent"
              >
                <Users className="h-7 w-7" />
                <span className="text-xs">Community</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="border-t border-gray-200 py-12 bg-gradient-to-br from-gray-50 to-white mt-20">
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
