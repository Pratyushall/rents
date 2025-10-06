"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Progress } from "../../components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  Building2,
  Users,
  Wrench,
  PoundSterling,
  TrendingUp,
  AlertTriangle,
  MessageSquare,
  Home,
  Zap,
  Thermometer,
  Droplets,
  Shield,
  Bell,
  Settings,
  BarChart3,
  MapPin,
  Clock,
  Phone,
} from "lucide-react";

export default function LandlordDashboard() {
  const [selectedProperty, setSelectedProperty] = useState("all");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                RentEase Landlord
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-sm bg-transparent"
              >
                <Bell className="h-4 w-4 mr-2 text-blue-600" />
                <span className="font-semibold">Notifications</span>
                <Badge className="ml-2 bg-blue-600 hover:bg-blue-700">3</Badge>
              </Button>
              <Avatar className="ring-2 ring-blue-100 hover:ring-blue-200 transition-all duration-200">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold">
                  JD
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-blue-100 hover:shadow-xl hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-50 to-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-bold text-gray-700">
                Total Properties
              </CardTitle>
              <div className="p-2 bg-blue-100 rounded-lg">
                <Building2 className="h-5 w-5 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                12
              </div>
              <p className="text-sm font-semibold text-green-600 mt-1">
                +2 this month
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-100 hover:shadow-xl hover:scale-105 transition-all duration-300 bg-gradient-to-br from-purple-50 to-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-bold text-gray-700">
                Active Tenants
              </CardTitle>
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                28
              </div>
              <p className="text-sm font-semibold text-gray-600 mt-1">
                95% occupancy
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-100 hover:shadow-xl hover:scale-105 transition-all duration-300 bg-gradient-to-br from-green-50 to-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-bold text-gray-700">
                Monthly Revenue
              </CardTitle>
              <div className="p-2 bg-green-100 rounded-lg">
                <PoundSterling className="h-5 w-5 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                £42,500
              </div>
              <p className="text-sm font-semibold text-green-600 mt-1">
                +8% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-100 hover:shadow-xl hover:scale-105 transition-all duration-300 bg-gradient-to-br from-orange-50 to-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-bold text-gray-700">
                Maintenance Requests
              </CardTitle>
              <div className="p-2 bg-orange-100 rounded-lg">
                <Wrench className="h-5 w-5 text-orange-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                7
              </div>
              <p className="text-sm font-semibold text-orange-600 mt-1">
                3 urgent
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white border border-gray-200 shadow-md p-1 rounded-xl">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white font-semibold rounded-lg transition-all duration-200"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="properties"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white font-semibold rounded-lg transition-all duration-200"
            >
              Properties
            </TabsTrigger>
            <TabsTrigger
              value="tenants"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white font-semibold rounded-lg transition-all duration-200"
            >
              Tenants
            </TabsTrigger>
            <TabsTrigger
              value="maintenance"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white font-semibold rounded-lg transition-all duration-200"
            >
              Maintenance
            </TabsTrigger>
            <TabsTrigger
              value="finances"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white font-semibold rounded-lg transition-all duration-200"
            >
              Finances
            </TabsTrigger>
            <TabsTrigger
              value="iot"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white font-semibold rounded-lg transition-all duration-200"
            >
              IoT Control
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
                  <CardTitle className="flex items-center text-lg font-bold">
                    <div className="p-2 bg-blue-100 rounded-lg mr-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-green-50 transition-all duration-200 border border-transparent hover:border-green-200">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 shadow-lg"></div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">
                        Rent payment received from Sarah Johnson
                      </p>
                      <p className="text-sm text-gray-600 font-medium">
                        Flat 3B, Camden Heights - £1,850
                      </p>
                      <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-orange-50 transition-all duration-200 border border-transparent hover:border-orange-200">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 shadow-lg"></div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">
                        New maintenance request
                      </p>
                      <p className="text-sm text-gray-600 font-medium">
                        Heating issue - Flat 2A, King's Cross
                      </p>
                      <p className="text-xs text-gray-500 mt-1">4 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-all duration-200 border border-transparent hover:border-blue-200">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 shadow-lg"></div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">
                        New tenant application
                      </p>
                      <p className="text-sm text-gray-600 font-medium">
                        Michael Chen - Flat 1C, Shoreditch
                      </p>
                      <p className="text-xs text-gray-500 mt-1">6 hours ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Property Performance */}
              <Card className="border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-white border-b border-purple-100">
                  <CardTitle className="flex items-center text-lg font-bold">
                    <div className="p-2 bg-purple-100 rounded-lg mr-3">
                      <BarChart3 className="h-5 w-5 text-purple-600" />
                    </div>
                    Property Performance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div className="space-y-3 p-3 rounded-lg bg-green-50 border border-green-200">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-gray-800">
                        Camden Heights
                      </span>
                      <span className="font-bold text-green-600">
                        98% occupancy
                      </span>
                    </div>
                    <Progress value={98} className="h-3 bg-green-200" />
                  </div>
                  <div className="space-y-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-gray-800">
                        King's Cross Tower
                      </span>
                      <span className="font-bold text-blue-600">
                        95% occupancy
                      </span>
                    </div>
                    <Progress value={95} className="h-3 bg-blue-200" />
                  </div>
                  <div className="space-y-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-gray-800">
                        Shoreditch Lofts
                      </span>
                      <span className="font-bold text-yellow-600">
                        87% occupancy
                      </span>
                    </div>
                    <Progress value={87} className="h-3 bg-yellow-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Urgent Actions */}
            <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-white border-b border-orange-100">
                <CardTitle className="flex items-center text-lg font-bold text-orange-700">
                  <div className="p-2 bg-orange-100 rounded-lg mr-3">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                  </div>
                  Urgent Actions Required
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 border-2 border-red-200 rounded-xl bg-gradient-to-br from-red-50 to-white hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <h4 className="font-bold text-red-800 text-lg mb-2">
                      Heating Emergency
                    </h4>
                    <p className="text-sm text-red-600 font-medium mb-3">
                      Flat 2A, King's Cross - No heating
                    </p>
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-md hover:shadow-lg transition-all duration-200 font-semibold"
                    >
                      Contact Contractor
                    </Button>
                  </div>
                  <div className="p-5 border-2 border-orange-200 rounded-xl bg-gradient-to-br from-orange-50 to-white hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <h4 className="font-bold text-orange-800 text-lg mb-2">
                      Certificate Expiry
                    </h4>
                    <p className="text-sm text-orange-600 font-medium mb-3">
                      Gas safety - Camden Heights
                    </p>
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 shadow-md hover:shadow-lg transition-all duration-200 font-semibold"
                    >
                      Schedule Inspection
                    </Button>
                  </div>
                  <div className="p-5 border-2 border-yellow-200 rounded-xl bg-gradient-to-br from-yellow-50 to-white hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <h4 className="font-bold text-yellow-800 text-lg mb-2">
                      Rent Overdue
                    </h4>
                    <p className="text-sm text-yellow-600 font-medium mb-3">
                      Flat 4B - 5 days overdue
                    </p>
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 shadow-md hover:shadow-lg transition-all duration-200 font-semibold"
                    >
                      Send Reminder
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="properties" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Camden Heights",
                  address: "123 Camden Road, NW1",
                  units: 8,
                  occupied: 8,
                  revenue: "£14,800",
                  color: "blue",
                },
                {
                  name: "King's Cross Tower",
                  address: "45 King's Cross St, N1",
                  units: 12,
                  occupied: 11,
                  revenue: "£19,200",
                  color: "purple",
                },
                {
                  name: "Shoreditch Lofts",
                  address: "78 Brick Lane, E1",
                  units: 6,
                  occupied: 5,
                  revenue: "£8,500",
                  color: "green",
                },
              ].map((property, index) => (
                <Card
                  key={index}
                  className={`border-${property.color}-100 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-gradient-to-br from-${property.color}-50 to-white`}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-lg">
                      <span className="font-bold text-gray-900">
                        {property.name}
                      </span>
                      <Badge
                        variant="outline"
                        className={`border-${property.color}-300 bg-${property.color}-100 text-${property.color}-700 font-semibold`}
                      >
                        {property.occupied}/{property.units} occupied
                      </Badge>
                    </CardTitle>
                    <CardDescription className="flex items-center font-medium text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                      {property.address}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-sm font-semibold text-gray-700">
                        Monthly Revenue
                      </span>
                      <span className="font-bold text-lg text-green-600">
                        {property.revenue}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-gray-300 hover:bg-blue-50 hover:border-blue-300 hover:scale-105 transition-all duration-200 font-semibold bg-transparent"
                      >
                        <Settings className="h-4 w-4 mr-1" />
                        Manage
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-gray-300 hover:bg-purple-50 hover:border-purple-300 hover:scale-105 transition-all duration-200 font-semibold bg-transparent"
                      >
                        <BarChart3 className="h-4 w-4 mr-1" />
                        Analytics
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tenants" className="space-y-6">
            <Card className="border-blue-100 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
                <CardTitle className="text-xl font-bold">
                  Tenant Management
                </CardTitle>
                <CardDescription className="font-medium">
                  Manage your tenants and their lease agreements
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {[
                    {
                      name: "Sarah Johnson",
                      flat: "3B Camden Heights",
                      rent: "£1,850",
                      status: "paid",
                      phone: "+44 7700 900123",
                    },
                    {
                      name: "Michael Chen",
                      flat: "1C Shoreditch Lofts",
                      rent: "£1,650",
                      status: "paid",
                      phone: "+44 7700 900456",
                    },
                    {
                      name: "Emma Wilson",
                      flat: "2A King's Cross",
                      rent: "£1,750",
                      status: "overdue",
                      phone: "+44 7700 900789",
                    },
                    {
                      name: "James Brown",
                      flat: "4B Camden Heights",
                      rent: "£1,900",
                      status: "overdue",
                      phone: "+44 7700 900012",
                    },
                  ].map((tenant, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-5 border-2 rounded-xl hover:shadow-lg transition-all duration-300 ${
                        tenant.status === "paid"
                          ? "border-green-200 bg-gradient-to-r from-green-50 to-white hover:border-green-300"
                          : "border-red-200 bg-gradient-to-r from-red-50 to-white hover:border-red-300"
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar className="ring-2 ring-gray-200 h-12 w-12">
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold text-lg">
                            {tenant.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-bold text-gray-900">
                            {tenant.name}
                          </h4>
                          <p className="text-sm text-gray-600 font-medium">
                            {tenant.flat}
                          </p>
                          <p className="text-sm text-gray-500">
                            {tenant.phone}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-bold text-lg text-gray-900">
                            {tenant.rent}
                          </p>
                          <Badge
                            variant={
                              tenant.status === "paid"
                                ? "default"
                                : "destructive"
                            }
                            className="font-semibold"
                          >
                            {tenant.status}
                          </Badge>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="hover:bg-blue-50 hover:border-blue-300 hover:scale-110 transition-all duration-200 bg-transparent"
                          >
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="hover:bg-green-50 hover:border-green-300 hover:scale-110 transition-all duration-200 bg-transparent"
                          >
                            <Phone className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="maintenance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-white border-b border-orange-100">
                  <CardTitle className="flex items-center text-lg font-bold">
                    <div className="p-2 bg-orange-100 rounded-lg mr-3">
                      <Wrench className="h-5 w-5 text-orange-600" />
                    </div>
                    Active Requests
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  {[
                    {
                      issue: "Heating not working",
                      tenant: "Emma Wilson",
                      property: "King's Cross 2A",
                      priority: "urgent",
                      time: "4 hours ago",
                    },
                    {
                      issue: "Leaky faucet",
                      tenant: "Sarah Johnson",
                      property: "Camden Heights 3B",
                      priority: "medium",
                      time: "1 day ago",
                    },
                    {
                      issue: "Broken window lock",
                      tenant: "Michael Chen",
                      property: "Shoreditch 1C",
                      priority: "low",
                      time: "3 days ago",
                    },
                  ].map((request, index) => (
                    <div
                      key={index}
                      className={`p-4 border-2 rounded-xl hover:shadow-lg transition-all duration-300 ${
                        request.priority === "urgent"
                          ? "border-red-200 bg-gradient-to-r from-red-50 to-white"
                          : request.priority === "medium"
                          ? "border-orange-200 bg-gradient-to-r from-orange-50 to-white"
                          : "border-gray-200 bg-gradient-to-r from-gray-50 to-white"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-gray-900">
                          {request.issue}
                        </h4>
                        <Badge
                          variant={
                            request.priority === "urgent"
                              ? "destructive"
                              : request.priority === "medium"
                              ? "default"
                              : "secondary"
                          }
                          className="font-semibold"
                        >
                          {request.priority}
                        </Badge>
                      </div>
                      <p className="text-sm font-semibold text-gray-700">
                        {request.tenant} - {request.property}
                      </p>
                      <p className="text-xs text-gray-500 mb-3">
                        {request.time}
                      </p>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 font-semibold bg-transparent"
                        >
                          Assign Contractor
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 hover:bg-green-50 hover:border-green-300 transition-all duration-200 font-semibold bg-transparent"
                        >
                          Contact Tenant
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
                  <CardTitle className="text-lg font-bold">
                    Maintenance Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  {[
                    {
                      task: "Gas Safety Inspection",
                      property: "Camden Heights",
                      date: "Dec 15, 2024",
                      status: "scheduled",
                    },
                    {
                      task: "Fire Alarm Testing",
                      property: "King's Cross Tower",
                      date: "Dec 20, 2024",
                      status: "pending",
                    },
                    {
                      task: "Boiler Service",
                      property: "Shoreditch Lofts",
                      date: "Jan 5, 2025",
                      status: "pending",
                    },
                  ].map((task, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 border-2 rounded-xl hover:shadow-lg transition-all duration-300 ${
                        task.status === "scheduled"
                          ? "border-green-200 bg-gradient-to-r from-green-50 to-white"
                          : "border-gray-200 bg-gradient-to-r from-gray-50 to-white"
                      }`}
                    >
                      <div>
                        <h4 className="font-bold text-gray-900">{task.task}</h4>
                        <p className="text-sm font-semibold text-gray-600">
                          {task.property}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {task.date}
                        </p>
                      </div>
                      <Badge
                        variant={
                          task.status === "scheduled" ? "default" : "secondary"
                        }
                        className="font-semibold"
                      >
                        {task.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="finances" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-green-100 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-gradient-to-br from-green-50 to-white">
                <CardHeader className="border-b border-green-100">
                  <CardTitle className="flex items-center text-lg font-bold">
                    <div className="p-2 bg-green-100 rounded-lg mr-3">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    Revenue Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="flex justify-between p-3 bg-white rounded-lg border border-green-200">
                    <span className="text-sm font-semibold text-gray-700">
                      This Month
                    </span>
                    <span className="font-bold text-green-600 text-lg">
                      £42,500
                    </span>
                  </div>
                  <div className="flex justify-between p-3 bg-white rounded-lg border border-gray-200">
                    <span className="text-sm font-semibold text-gray-700">
                      Last Month
                    </span>
                    <span className="font-bold text-gray-900">£39,200</span>
                  </div>
                  <div className="flex justify-between p-3 bg-white rounded-lg border border-gray-200">
                    <span className="text-sm font-semibold text-gray-700">
                      YTD
                    </span>
                    <span className="font-bold text-gray-900">£485,600</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-100 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-gradient-to-br from-red-50 to-white">
                <CardHeader className="border-b border-red-100">
                  <CardTitle className="text-lg font-bold">Expenses</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="flex justify-between p-3 bg-white rounded-lg border border-red-200">
                    <span className="text-sm font-semibold text-gray-700">
                      Maintenance
                    </span>
                    <span className="font-bold text-red-600 text-lg">
                      £3,200
                    </span>
                  </div>
                  <div className="flex justify-between p-3 bg-white rounded-lg border border-red-200">
                    <span className="text-sm font-semibold text-gray-700">
                      Insurance
                    </span>
                    <span className="font-bold text-red-600 text-lg">
                      £1,800
                    </span>
                  </div>
                  <div className="flex justify-between p-3 bg-white rounded-lg border border-red-200">
                    <span className="text-sm font-semibold text-gray-700">
                      Management
                    </span>
                    <span className="font-bold text-red-600 text-lg">
                      £2,100
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-50 to-white">
                <CardHeader className="border-b border-blue-100">
                  <CardTitle className="text-lg font-bold">
                    Net Profit
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div className="text-center p-4 bg-white rounded-xl border-2 border-green-200">
                    <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                      £35,400
                    </div>
                    <p className="text-sm font-semibold text-gray-600 mt-2">
                      This Month
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl border-2 border-blue-200">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                      83.3%
                    </div>
                    <p className="text-sm font-semibold text-gray-600 mt-2">
                      Profit Margin
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="iot" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  property: "Camden Heights",
                  temp: "21°C",
                  power: "2.4kW",
                  water: "Normal",
                  security: "Armed",
                  color: "blue",
                },
                {
                  property: "King's Cross Tower",
                  temp: "19°C",
                  power: "3.1kW",
                  water: "Normal",
                  security: "Armed",
                  color: "purple",
                },
                {
                  property: "Shoreditch Lofts",
                  temp: "22°C",
                  power: "1.8kW",
                  water: "Low Pressure",
                  security: "Disarmed",
                  color: "green",
                },
              ].map((property, index) => (
                <Card
                  key={index}
                  className={`border-${property.color}-100 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-gradient-to-br from-${property.color}-50 to-white`}
                >
                  <CardHeader
                    className={`border-b border-${property.color}-100`}
                  >
                    <CardTitle className="flex items-center text-lg font-bold">
                      <div
                        className={`p-2 bg-${property.color}-100 rounded-lg mr-3`}
                      >
                        <Home
                          className={`h-5 w-5 text-${property.color}-600`}
                        />
                      </div>
                      {property.property}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2 p-3 bg-white rounded-lg border border-red-200">
                        <Thermometer className="h-5 w-5 text-red-500" />
                        <span className="text-sm font-bold">
                          {property.temp}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 p-3 bg-white rounded-lg border border-yellow-200">
                        <Zap className="h-5 w-5 text-yellow-500" />
                        <span className="text-sm font-bold">
                          {property.power}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 p-3 bg-white rounded-lg border border-blue-200">
                        <Droplets className="h-5 w-5 text-blue-500" />
                        <span className="text-sm font-bold">
                          {property.water}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 p-3 bg-white rounded-lg border border-green-200">
                        <Shield className="h-5 w-5 text-green-500" />
                        <span className="text-sm font-bold">
                          {property.security}
                        </span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-gray-300 hover:bg-blue-50 hover:border-blue-300 hover:scale-105 transition-all duration-200 font-semibold bg-transparent"
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
